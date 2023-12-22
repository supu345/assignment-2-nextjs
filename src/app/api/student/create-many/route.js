import prisma from "../../prisma";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

//Create API for registering many students at once.

export async function POST(req, res) {
  try {
    // const reqBody = await req.json();
    const prisma = new PrismaClient();

    const result = await prisma.student.createMany({
      data: [
        {
          first_name: "AAA",
          last_name: "AAA",
          age: 10,
          grade: 2,
          course: "Art",
        },
        {
          first_name: "BBB",
          last_name: "BBB",
          age: 11,
          grade: 2,
          course: "Programming",
        },
        {
          first_name: "CCC",
          last_name: "CCC",
          age: 12,
          grade: 3,
          course: "Science",
        },
        {
          first_name: "DDD",
          last_name: "DDD",
          age: 10,
          grade: 4,
          course: "History",
        },
      ],
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
