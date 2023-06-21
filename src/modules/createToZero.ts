import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.coursesModules.create({
        data: {
            course: {
                create: {
                    name: 'React',
                    description: 'React description',
                    duration: 200,
                    teacher: {
                        create: {
                            name: 'Leonardo'
                        }
                    }
                }
            },
            module: {
                create: {
                    description: 'Curso de prisma',
                    name: 'Prisma'
                }
            }
        }
    });

    console.log(result);
}

main();