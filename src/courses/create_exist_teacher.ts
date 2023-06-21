import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: 'Curso de React Native',
            description: 'Descrição do curso de React native',
            duration: 200,
            teacher: {
                connect: {
                    id: '6431ff18-4fed-41f4-8fff-506f7ce8b36f'
                }
            }
        }
    });

    console.log(result);
}

main();