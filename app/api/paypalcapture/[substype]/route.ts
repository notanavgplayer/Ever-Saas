import type { NextApiRequest, NextApiResponse } from 'next'
import client from '@/lib/paypal'
import paypal from '@paypal/checkout-server-sdk'
import { NextResponse, NextRequest } from "next/server";
import { checkSubscriptionPaypal } from "@/lib/subscriptionpaypal";
import { stripe } from "@/lib/stripe";
import db from "@/lib/db";
import { auth } from "@clerk/nextjs";

export async function POST(
  req: Request,
  {
    params,
  }: {
    params: {
      subsType: "month" | "year";
    };
  }
) {

  const result = await req.json();
  const orderID = result.orderID;
  const paramsString = JSON.stringify(params)
  const obj = JSON.parse(paramsString);
  const isSubscribed = await checkSubscriptionPaypal();
  // Access the value of the 'substype' property
  const month = obj.substype;
  const selection = month;
  const { userId } = auth();

  const isUserExist = await db.userSubscriptionPaypal.findUnique({
    where: {
      userId: userId,
    },
  });


  const PaypalClient = client()
  const request = new paypal.orders.OrdersCaptureRequest(orderID)
  request.requestBody({})
  if (isSubscribed) {
    return new NextResponse(JSON.stringify({ result: "Already Exist", amount: '30.00' }));
  }
  const response = await PaypalClient.execute(request)
  if (!response) {
    return new NextResponse("Internal Error", { status: 500 });
  }

  if (response?.result?.status === "COMPLETED") {
    const currentUnixTimestamp: number = Math.floor(Date.now() / 1000);
    let oneMonthFromNowUnixTimestamp: number = 0; // Assuming 30 days in a month
    if (selection === "month") {
      oneMonthFromNowUnixTimestamp = currentUnixTimestamp + (30 * 24 * 60 * 60)
    }
    else if (selection === "year") {
      oneMonthFromNowUnixTimestamp = currentUnixTimestamp + (365 * 24 * 60 * 60)
    }
    const oneMonthFromNowDate: Date = new Date(oneMonthFromNowUnixTimestamp * 1000); // Multiply by 1000 to convert from seconds to milliseconds
    const isoDateTime: string = oneMonthFromNowDate.toISOString();



    if (!userId) {
      return new NextResponse("Internal Error", { status: 500 });
    }

    const id: String = response?.result?.id;
    const accountId: String = response?.result?.payment_source?.paypal?.account_id;
    const link: String = response?.result?.links[0].href;
    console.log(link)

    if (isUserExist) {
      await db.userSubscriptionPaypal.update({
        where: {
          userId: userId,
        },
        data: {
          paypalCustomerId: id,
          paypalCustomerLink: link,
          paypalAccountId: accountId,
          stripeCurrentPeriodEnd: isoDateTime,
        },
      });
    }
    else {
      await db.userSubscriptionPaypal.create({
        data: {
          userId: userId,
          paypalCustomerId: id,
          paypalCustomerLink: link,
          paypalAccountId: accountId,
          stripeCurrentPeriodEnd: isoDateTime,
        },
      });
    }



  }

  return new NextResponse(JSON.stringify({ orderID: response.result.id, amount: '30.00' }));

}