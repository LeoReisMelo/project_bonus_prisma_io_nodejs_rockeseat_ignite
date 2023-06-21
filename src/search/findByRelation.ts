import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const courseModules = await prisma.coursesModules.findMany({
        include: {
           course: true,
           module: true
        }
    });

    console.log(JSON.stringify(courseModules));
}

main();