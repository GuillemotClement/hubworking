import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  await prisma.working.create({
    data: {
      title: 'Ty-Kreiz',
      image: 'https://picsum.photos/200/300',
      localisation: '48.120000	-3.500000',
    },
  });

  await prisma.working.create({
    data: {
      title: 'BreizhLab',
      image: 'https://picsum.photos/200/300',
      localisation: '48.532211	-2.030456',
    },
  });

  await prisma.working.create({
    data: {
      title: 'KerCoWork',
      image: 'https://picsum.photos/200/300',
      localisation: '47.766789	-3.390456',
    },
  });

  await prisma.working.create({
    data: {
      title: 'La Fabrique de l’Ouest',
      image: 'https://picsum.photos/200/300',
      localisation: '47.986312	-3.129876',
    },
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
