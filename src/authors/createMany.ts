import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.authors.create({
        data: {
            name: 'Leonardo Reis',
            books: {
                createMany: {
                    data: [
                        {
                            name: "Super turbo"
                        },
                        {
                            name: "Desafiando o mundo"
                        }
                    ]
                }
            }
        }
    });

    console.log(result);
}

main();