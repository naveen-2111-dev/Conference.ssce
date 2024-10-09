import emailQuery from "@/app/helper/query";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { mail, password } = await req.json();

  if (!mail || !password) {
    return NextResponse.json(
      {
        message: "user details - null",
      },
      { status: 404 }
    );
  }

  try {
    const User = await emailQuery(mail, password);
    return NextResponse.json(
      {
        message: "user found",
      },
      { data: User },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      {
        message: "user not found",
      },
      { status: 500 }
    );
  }
}
