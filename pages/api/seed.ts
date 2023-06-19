import { PrismaClient, PRICE } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const categories = ["Fitness", "Arts", "Tech", "Business", "Cooking", "Music", "Education", "Language", "Crafts", "Fashion", "Photography", "Health"];
  const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];
  const guideNames = ["John Doe", "Jane Doe", "Jim Brown", "Jill Smith", "Jake Johnson", "Jenny Wilson", "Jeff Davis", "Julia Clark", "Joe Miller", "Jessica Taylor"];

  // Create categories
  for (const name of categories) {
    await prisma.category.create({
      data: { name },
    });
  }

  // Create locations
  for (const name of locations) {
    await prisma.location.create({
      data: { name },
    });
  }

  // Create guides with skills
  for (const [index, name] of guideNames.entries()) {
    const guide = await prisma.guide.create({
      data: {
        name,
        main_image: `https://picsum.photos/id/${index + 10}/200/300`,
        images: [`https://picsum.photos/id/${index + 20}/200/300`, `https://picsum.photos/id/${index + 30}/200/300`],
        description: `This is a description for guide ${name}`,
        availability: `Available on weekdays`,
        slug: `${name.toLowerCase().replace(/ /g, "-")}`,
        price: index % 3 === 0 ? "CHEAP" : index % 2 === 0 ? "REGULAR" : "EXPENSIVE",
        category: {
          connect: {
            id: (index % 12) + 1, // Connect to one of the categories
          },
        },
        location: {
          connect: {
            id: (index % 10) + 1, // Connect to one of the locations
          },
        },
        Skills: {
          create: {
            name: `Skill for guide ${name}`,
            price: `${(index + 1) * 10}$`,
            description: `This is a description for the skill of guide ${name}`,
          },
        },
      },
      include: {
        Skills: true,
      },
    });

    console.log(`Created guide with ID ${guide.id}`);
  }

  console.log("Seeding finished");
}

main()
  .catch((error) => {
    console.log(`Error seeding: ${error}`);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });