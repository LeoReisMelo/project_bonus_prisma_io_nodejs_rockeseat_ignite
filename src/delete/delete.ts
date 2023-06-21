import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const courseModules = await prisma.coursesModules.delete({
        where: {
            id: 'cae6c8fc-dcaf-4afd-abab-702bbfb909b6'
        }
    });

    console.log(courseModules);
}

main();