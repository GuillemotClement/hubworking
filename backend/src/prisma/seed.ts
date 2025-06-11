import { PrismaClient } from '../../generated/prisma';
// import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  //  SEDD DES WORKING PLACE
  await prisma.working.create({
    data: {
      title: 'Ty-Kreiz',
      image: 'https://picsum.photos/id/10/400/300',
      localisation: '48.120000	-3.500000',
      describ:
        'Ty-Kreiz est un espace de coworking chaleureux au cœur de la Bretagne. Idéal pour les freelances et startups, il propose un environnement calme avec des zones de travail collaboratif et des salles de réunion modernes.',
    },
  });

  await prisma.working.create({
    data: {
      title: 'BreizhLab',
      image: 'https://picsum.photos/id/11/400/300',
      localisation: '48.532211	-2.030456',
      describ:
        'BreizhLab est un hub technologique innovant, favorisant l’échange entre professionnels du numérique. Il offre un cadre dynamique avec des ateliers réguliers et un accès à des ressources techniques pointues.',
    },
  });

  await prisma.working.create({
    data: {
      title: 'KerCoWork',
      image: 'https://picsum.photos/id/12/400/300',
      localisation: '47.766789	-3.390456',
      describ:
        'KerCoWork allie confort et flexibilité avec ses bureaux modulables et ses espaces détente. Parfait pour les indépendants qui cherchent à mixer productivité et convivialité dans un cadre verdoyant.',
    },
  });

  await prisma.working.create({
    data: {
      title: 'La Fabrique de l’Ouest',
      image: 'https://picsum.photos/id/13/400/300',
      localisation: '47.986312	-3.129876',
      describ:
        "La Fabrique de l’Ouest est un lieu unique dédié à la créativité et à l'innovation. Avec ses espaces ouverts et ses zones de brainstorming, il encourage la collaboration entre entrepreneurs et artistes.",
    },
  });

  // SEED ROLE USER
  await prisma.role.create({
    data: {
      title: 'admin',
    },
  });

  await prisma.role.create({
    data: {
      title: 'user',
    },
  });

  // SEED USER
  await prisma.user.create({
    data: {
      username: 'administrateur',
      email: 'admin@mail.com',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      // password: await bcrypt.hash('123456', 10),
      password: '123456',
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
      roleId: 1,
    },
  });

  await prisma.user.create({
    data: {
      username: 'gizmo',
      email: 'gizmo@mail.com',
      password: '123456',
      image: 'https://randomuser.me/api/portraits/men/36.jpg',
      roleId: 2,
    },
  });

  await prisma.user.create({
    data: {
      username: 'julie',
      email: 'julie@mail.com',
      password: '123456',
      image: 'https://randomuser.me/api/portraits/women/49.jpg',
      roleId: 2,
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
