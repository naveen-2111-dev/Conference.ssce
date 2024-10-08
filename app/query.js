import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function emailQuery(email,pass) {
    try {
        await prisma.userCred.findFirst({
            where: {
                mail: email,
                password : pass
            }
        })
    } catch (err) {
        console.log(err);
        return null;
    }
}

emailQuery()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.log(err);
    await prisma.$disconnect();
    process.exit(1);
  });