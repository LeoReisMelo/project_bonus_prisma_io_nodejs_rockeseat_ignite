import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.update({
        where: {
            id: 'efd4d3da-a5d7-4977-b94b-ed2ca92a1504'
        },
        data: {
            duration: 250,
            name: 'Curso de Javascript',
            description: 'Curso excelente de javascript'
        }
        });

    console.log(result);
}

main();