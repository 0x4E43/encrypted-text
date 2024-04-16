import { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function POST(req: Request) {
  //Takes the data from the request body
  const siteData: Site = await req.json();
  //use Prisma to check if data exists in the database
  //if it does, return a 400 error
  //if it doesn't, return a 200 and add the data to the database
  if (!siteData.name) {
    return NextResponse.json(
      {
        message: "Site name cannot be null",
        code: 503,
      },
      { status: 503 }
    );
  }

  try {
    /*
     * Check in the database using prisma client if site name is exist
     * If exist, return 400 error, else create new site name
     */
    const site = await prisma.sites.findUnique({
      where: {
        name: siteData.name,
      },
    });

    if (site) {
      return NextResponse.json(
        {
          message: "Site already exists",
          code: 333,
        },
        { status: 200 }
      );
    }

    if(siteData.shouldCreate){
      await prisma.sites.create({
        data: {
          name: siteData.name,
        },
      });
    }
    const message  = siteData.shouldCreate ? "Site available! We created One for you!" : "Site available!";
    return NextResponse.json(
      {
        message: message,
        code: 222,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Something went wrong",
        code: 500,
      },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  const userRequest = await req.json();
  console.log("User request", userRequest);
  return NextResponse.json(
    {
      message: "This is a GET request",
    },
    { status: 200 }
  );
}
