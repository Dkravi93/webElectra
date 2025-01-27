import { authOptions } from "@/lib/auth";
import { mongooseConnect } from "@/lib/mongoose";
import { User } from "@/models/user";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";



export async function DELETE(request: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
        return NextResponse.json({
            status: 401,
            message: "Unauthorized",
        });
    }

    try {
        const url = new URL(request.url);
        const id = url.pathname.split("/").pop();
        console.log("Session User: ", session?.user);

        await mongooseConnect();
        
        // find by email and update the wishlist
        const user = await User.findOneAndUpdate(
            { email: session.user.email },
            { $pull: { wishlist: id } },
            { new: true }
        );
        

        return NextResponse.json({
            status: 200,
            wishlist: user.wishlist,
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json({
            status: 500,
            message: "Internal server error",
        });
    }
}
