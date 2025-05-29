import { NextRequest, NextResponse } from "next/server";
import { Connect } from "@/utils";
export const POST = async(request: NextRequest) => {
    await Connect();
    const body = await request.json();
    const { clause } = body;
    switch(clause) {
        default:
            return NextResponse.json({ message: "OK" }, { status: 200 });
    }
}