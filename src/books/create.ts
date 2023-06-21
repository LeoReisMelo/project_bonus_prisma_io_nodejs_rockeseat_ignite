import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.book.create({
        data: {
            name: 'Harry Potter',
            author_id: 'd94950b3-86aa-49fd-824c-9cee66336dac'
        }
    });

    console.log(result);
}

main();