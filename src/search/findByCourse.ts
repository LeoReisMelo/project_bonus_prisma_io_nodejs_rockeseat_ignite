import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const course = await prisma.courses.findMany({
        include: {
            CoursesModules: true,
        }
    });

    console.log(JSON.stringify(course));
}

main();