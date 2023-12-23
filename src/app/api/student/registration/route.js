import prisma from "../../prisma";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

//Creating API for single student registration
export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();

    const result = await prisma.student.create({
      data: {
        first_name: reqBody["first_name"],
        last_name: reqBody["last_name"],
        age: reqBody["age"],
        grade: reqBody["grade"],
        course: reqBody["course"],
      },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
