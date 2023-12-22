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

//Create API for registering many students at once.
// export async function POST(req, res) {
//   try {
//     // const reqBody = await req.json();
//     const prisma = new PrismaClient();

//     const result = await prisma.student.createMany({
//       data: [
//         { first_name: "AAA", last_name: "AAA", age: 10, grade: 2 },
//         { first_name: "BBB", last_name: "BBB", age: 11, grade: 2 },
//         { first_name: "CCC", last_name: "CCC", age: 12, grade: 3 },
//         { first_name: "DDD", last_name: "DDD", age: 10, grade: 4 },
//       ],
//     });

//     return NextResponse.json({ status: "success", data: result });
//   } catch (e) {
//     return NextResponse.json({ status: "fail", data: e });
//   }
// }

//API needs to be created to update student information
// export async function POST(req, res) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const id = parseInt(searchParams.get("id"));
//     const reqBody = await req.json();

//     const prisma = new PrismaClient();

//     const result = await prisma.student.update({
//       where: { id: id },
//       data: reqBody,
//     });

//     return NextResponse.json({ status: "success", data: result });
//   } catch (e) {
//     return NextResponse.json({ status: "fail", data: e });
//   }
// }

//Creating API to delete a single student.
// export async function POST(req, res) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const id = parseInt(searchParams.get("id"));
//     const reqBody = await req.json();

//     const prisma = new PrismaClient();

//     const result = await prisma.student.delete({
//       where: { id: id },
//     });

//     return NextResponse.json({ status: "success", data: result });
//   } catch (e) {
//     return NextResponse.json({ status: "fail", data: e });
//   }
// }

//API should be created to get all students together.
// export async function POST(req, res) {
//   try {
//     const prisma = new PrismaClient();
//     const result = await prisma.student.findMany();

//     return NextResponse.json({ status: "success", data: result });
//   } catch (e) {
//     return NextResponse.json({ status: "fail", data: e });
//   }
// }

// export async function POST(req, res) {
//   try {
//     const prisma = new PrismaClient();
//     const result = await prisma.student.findUnique({
//       where: { id: 1 },
//     });

//     return NextResponse.json({ status: "success", data: result });
//   } catch (e) {
//     return NextResponse.json({ status: "fail", data: e });
//   }
// }
