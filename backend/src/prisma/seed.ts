import { PrismaClient } from 'generated/prisma';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.role.upsert({
    where: { title: 'user' },
    update: {},
    create: {
      title: 'user',
    },
  });
  const admin = await prisma.role.upsert({
    where: { title: 'admin' },
    update: {},
    create: {
      title: 'admin',
    },
  });
  console.log({ user, admin });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
