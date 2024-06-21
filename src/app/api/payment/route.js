import { bookingModel } from "@/models/booking-model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        const { hotelId, userId, checkin, checkout } = body;

        const payload = {
            hotelId: new mongoose.Types.ObjectId(hotelId),
            userId: new mongoose.Types.ObjectId(userId),
            checkin,
            checkout
        };
        await bookingModel.create(payload);

        return NextResponse.json("Payment Successful", { status: 201 });
    } catch (error) {
        return NextResponse.json("Payment Failed", { status: 500 });
    }
}