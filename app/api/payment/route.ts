import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { auth } from "@clerk/nextjs/server";
import { users } from "@clerk/clerk-sdk-node";

const stripe = new Stripe(process.env.SCREATE_KEY as string);

interface bodyData {
    name: string;
    price: number;
}

export const POST = async (request: NextRequest) => {
    try {
        // Get the user ID from Clerk
        const { userId } = auth();

        if (!userId) {
            return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
        }

        // Fetch user details from Clerk
        const user = await users.getUser(userId);

        const data: bodyData = await request.json();

        const customer = await stripe.customers.create({
            name: user.firstName ? `${user.firstName} ${user.lastName || ""}`.trim() : "Unknown User",
            email: user.emailAddresses[0]?.emailAddress || "no-email@example.com",
            address: {
                line1: "S10 Townsend St",
                postal_code: "98140",
                city: "San Francisco",
                state: "CA",
                country: "India"
            }
        });

        const checkOutSession = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            customer: customer.id,
            mode: "payment",
            success_url: "https://unimanage1.vercel.app/apps",
            cancel_url: `https://unimanage1.vercel.app/cancel?token=${customer.id}`,
            line_items: [
                {
                    quantity: 1,
                    price_data: {
                        product_data: {
                            name: data.name,
                        },
                        currency: "INR",
                        unit_amount: data.price * 100
                    }
                }
            ]
        });

        return NextResponse.json({ message: checkOutSession, url: checkOutSession.url }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
