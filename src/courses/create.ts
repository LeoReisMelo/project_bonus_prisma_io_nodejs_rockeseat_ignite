import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: 'Curso de React',
            description: 'Descrição do curso de React',
            duration: 200,
            teacher: {
                connectOrCreate: {
                    where: {
                        name: 'Leonardo Reis'
                    },
                    create: {
                        name: 'Leonardo Reis'
                    }
                }
            }
        }
    });

    console.log(result);
}

main();