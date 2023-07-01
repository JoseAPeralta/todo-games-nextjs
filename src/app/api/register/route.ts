import clientPromise from "@/lib/db";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, password } = (await req.json()) as {
      name: string;
      email: string;
      password: string;
    };
    const hashed_password = await hash(password, 12);

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_NAME);
    const user = await db.collection("users").insertOne({
      name,
      email: email.toLowerCase(),
      password: hashed_password,
    });

    return NextResponse.json({
      //   user: {
      //     name: user.name,
      //     email: user.email,
      //   },
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
