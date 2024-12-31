import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    try {
        const url = new URL(request.url);
        const id = url.pathname.split("/").pop();
        await mongooseConnect();
        const product = await Product.findById(id);

        if (!product) {
            return NextResponse.json({
                status: 404,
                message: "Category not found"
            })
        }

        return NextResponse.json({
            status: 200,
            product
        })
    } catch (e) {
        console.error("Error: ", e);
        return NextResponse.json({
            status: 500,
            message: "Error connecting to MongoDB"
        });
    }
}