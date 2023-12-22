import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

//Creating API to delete a single student.
export async function POST(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));

    const prisma = new PrismaClient();

    const result = await prisma.student.delete({
      where: { id: id },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
