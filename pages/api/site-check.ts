import { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //Takes the data from the request body
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ error: "Method not allowed, please use POST" });
  }
  const { siteName } = req.body;
  //use Prisma to check if data exists in the database
  //if it does, return a 400 error
  //if it doesn't, return a 200 and add the data to the database
  if (!siteName) {
    return res.status(400).json({ error: "Site name cannot be null" });
  }

  try {
    /*
     * Check in the database using prisma client if site name is exist
     * If exist, return 400 error, else create new site name
     */
    const site = await prisma.sites.findUnique({
      where: {
        name: siteName,
      },
    });

    if (site) {
      return res
        .status(400)
        .json({ error: "Site name already exists", status: false });
    }

    await prisma.sites.create({
      data: {
        name: siteName,
      },
    });

    return res
      .status(200)
      .json({ message: "Site name available", status: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
