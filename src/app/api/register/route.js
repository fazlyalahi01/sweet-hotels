import dbConnect from "@/database/dbConnect";
import { userModel } from "@/models/user-model";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
    await dbConnect();
    try {
        const body = await request.json();
        const { fname, lname, email, password } = body;
        const hashedPassword = await bcryptjs.hash(password, 5);

        const newUser = {
            name: `${fname} ${lname}`,
            email,
            password: hashedPassword,
        };

        const user = await userModel.create(newUser);

        return NextResponse.json(
            {
                message: "User created successfully",
                user,
            },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                message: "Failed to create user",
            },
            { status: 500 }
        );
    }
}
