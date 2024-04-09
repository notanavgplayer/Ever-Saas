import { auth } from "@clerk/nextjs";
import db from "./db";

const DAY_IN_MS = 86_400_000;

export const checkSubscriptionPaypal = async () => {
    const { userId } = auth();

    if (!userId) {
        return false;
    }

    const userSubscriptionPaypal = await db.userSubscriptionPaypal.findUnique({
        where: {
            userId: userId,
        },
        select: {
            stripeCurrentPeriodEnd: true,
        },
    });

    if (!userSubscriptionPaypal) {
        return false;
    }

    const isValid =
        userSubscriptionPaypal.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS >
        Date.now();

    return !!isValid;
};