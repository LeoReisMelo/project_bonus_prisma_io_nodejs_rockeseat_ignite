import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.authors.create({
        data: {
            name: 'Leonardo Melo',
            books: {
                create: {
                    name: 'Limpeza'
                }
            }
        }
    });

    console.log(result);
}

main();