// import prisma from 'lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import client from '@/lib/paypal'
import { auth, currentUser } from "@clerk/nextjs";
import paypal from '@paypal/checkout-server-sdk'
import { NextResponse } from "next/server";
import db from "@/lib/db";
import { absoluteURL } from '@/lib/utils';

const settingsUrl = absoluteURL("/account-settings");

export async function POST(
  req: NextApiRequest,
  {
    params,
  }: {
    params: {
      subsType: "month" | "year";
    };
  }
) {
  const { userId } = auth();
  const user = await currentUser();
  const paramsString = JSON.stringify(params)
  let selection = null;
  try {
    // Parse the JSON string into an object
    const obj = JSON.parse(paramsString);

    // Access the value of the 'substype' property
    const month = obj.substype;
    selection = month;
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }

  if (!userId || !user) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const userSubscription = await db.userSubscription.findUnique({
    where: {
      userId,
    },
  });
  

  if (userSubscription && userSubscription.stripeCustomerId) {
    // const stripeSession = await stripe.billingPortal.sessions.create({
    //   customer: userSubscription.stripeCustomerId,
    //   return_url: settingsUrl,
    // });

    return new NextResponse(JSON.stringify({ url: stripeSession.url }));
  }

  const PaypalClient = client()
  //This code is lifted from https://github.com/paypal/Checkout-NodeJS-SDK
  const request = new paypal.orders.OrdersCreateRequest()
  //console.log(selection)
  request.headers['prefer'] = 'return=representation'
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [
      {
        description:"Access Unlimited AI Generations On IntellicaNet",
        amount: {
          currency_code: 'USD',
          value: selection === "month" ? '30.00' : '255.00',
        },
      },
    ],
  })
  const response = await PaypalClient.execute(request)
  //console.log(response)
  if (response.statusCode !== 201) {
    return new NextResponse("Internal Error", { status: 500 });
  }
  return new NextResponse(JSON.stringify({ orderID: response.result.id, amount : selection === "month" ? '30.00' : '255.00' }));
  //res.json({ orderID: response.result.id })
}
