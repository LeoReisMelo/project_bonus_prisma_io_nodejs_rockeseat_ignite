import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.coursesModules.create({
        data: {
            fk_id_course: 'd83b8af9-cde3-47c3-ba62-3553a7bede9b',
            fk_id_module: 'a0c90039-977b-4004-aee8-c9585462ee42',
        }
    });

    console.log(result);
}

main();