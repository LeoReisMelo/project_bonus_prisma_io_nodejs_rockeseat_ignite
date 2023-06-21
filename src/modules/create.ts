import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.modules.create({
        data: {
            name: 'Firebase',
            description: 'Aprendendo firebase',
            CoursesModules: {
                create: {
                    course: {
                        connect: {
                            id: '4d8579b6-821d-4233-a56c-30b6fe669e63'
                        }
                    }
                }
            }
        }
    });

    console.log(result);
}

main();