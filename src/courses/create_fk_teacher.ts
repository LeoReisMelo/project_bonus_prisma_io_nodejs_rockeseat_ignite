import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: 'Curso de Node JS',
            description: 'Descrição do curso de Node JS',
            duration: 200,
            fk_id_teacher: '2ca39ffe-55f6-4502-ba4c-8277fcfec5e2'
        }
    });

    console.log(result);
}

main();