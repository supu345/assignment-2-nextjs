import prisma from "../../prisma";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

//API should be created to get all students together.
export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.student.findMany();

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
