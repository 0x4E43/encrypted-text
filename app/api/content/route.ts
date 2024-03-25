import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


const prisma = new PrismaClient();

export async function POST(req: Request) {
    const reqData :  SiteData = await req.json();
    if(reqData === undefined) {
        return NextResponse.json({"error": "No data found"});
    }
    const siteName = reqData.siteName;
        try {
            const site = await prisma.sites.findUnique({
                where: {
                    name: siteName,
                },
                });
            
            if(site) {
                const result = await prisma.notes.create({
                    data: {
                        category: 'default', 
                        title: reqData.title,
                        content: reqData.content,
                        siteId: site.id,
                        createdAt: new Date(),
                        updatedAt: new Date()
                    }
                });

                const resp : Notes= {
                    id: result.id,
                    category: result.category,
                    title: result.title,
                    content: result.content,
                    siteId: result.siteId
                } 
                return NextResponse.json({"message": "Data saved successfully", "data": resp});

            }else{
                return NextResponse.json({"error": "Site not found"});
            }

        } catch (error) {
            console.error(error);
            return NextResponse.json({"error": "Something went wrong while saving data"});
        }
    
    return NextResponse.json({"siteName": siteName});
}