import { NextResponse } from "next/server";
import { checkSubscriptionPaypal } from "@/lib/subscriptionpaypal";


export async function POST(
    req: Request,
) {
    const isSubscribed = await checkSubscriptionPaypal();
    return new NextResponse(JSON.stringify({ isSubscribed: isSubscribed }));

}