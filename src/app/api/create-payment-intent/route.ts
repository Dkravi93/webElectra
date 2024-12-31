import { authOptions } from "@/lib/auth";
import { mongooseConnect } from "@/lib/mongoose";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) { 
        return NextResponse.json({
            status: 401,
            message: "Unauthorized",
        });
    }


    try {
        await mongooseConnect();

        const { amount } = await req.json();
        const mockPaymentIntent = {
            client_secret: "mock_client_secret_for_local_dev"
        };

       
        return NextResponse.json({
            clientSecret: mockPaymentIntent.client_secret
        })
    }
    catch (error) {
        return NextResponse.json({
            error: error,
            status: 500,
        })
    }
}
