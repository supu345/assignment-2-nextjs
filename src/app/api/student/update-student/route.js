import prisma from "../../prisma";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

//API needs to be created to update student information
export async function POST(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));
    const reqBody = await req.json();

    const prisma = new PrismaClient();

    const result = await prisma.student.update({
      where: { id: id },
      data: reqBody,
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
