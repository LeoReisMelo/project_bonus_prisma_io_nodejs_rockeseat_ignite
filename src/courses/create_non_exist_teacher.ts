import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: 'Curso de React JS',
            description: 'Descrição do curso de React native JS',
            duration: 200,
            teacher: {
                create: {
                    name: 'Roberto Nunes'
                }
            }
        }
    });

    console.log(result);
}

main();