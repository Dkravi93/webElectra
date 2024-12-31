import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/user";
import { z } from "zod";    
import bcrypt from "bcrypt";
import axios from "axios";
import { mongooseConnect } from "@/lib/mongoose";

const signUpSchema = z.object({
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
  })

  export async function POST(req: NextRequest) {
    const { firstName, lastName, email, password } = await req.json();
    console.log("Request Received for sign up:", firstName, lastName, email);

    // Validate input schema
    const { success } = signUpSchema.safeParse({ firstName, lastName, email, password });
    if (!success) {
        return new NextResponse("Invalid input", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await mongooseConnect();

        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return new NextResponse("Email already exists. Please use a different email.", { status: 400 });
        }

        // Prepare the user object (but don't save it yet)
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ""; // Adjust for your environment
        console.log("Base URL:", baseUrl);

        // Send OTP to the user's email
        try {
            await axios.post(`${baseUrl}/api/send-otp`, { email });

            // Save user to the database only if the OTP was sent successfully
            await newUser.save();

            return new NextResponse("Signed up successfully. OTP sent to email.", { status: 200 });
        } catch (otpError) {
            console.error("Failed to send OTP:", otpError);
            return new NextResponse("Failed to send OTP. Please try again later.", { status: 500 });
        }
    } catch (error) {
        console.error(error);
        return new NextResponse("Failed to sign up", { status: 500 });
    }
}
