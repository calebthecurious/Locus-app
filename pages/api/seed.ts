import { NextApiRequest, NextApiResponse } from "next";
import { PRICE, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await prisma.guide.deleteMany();
  await prisma.location.deleteMany();
  await prisma.category.deleteMany();

  await prisma.location.createMany({
    data: [
      { name: "Melbourne CBD" },
      { name: "St Kilda" },
      { name: "South Yarra" },
      { name: "Fitzroy" },
      { name: "Carlton" },
      { name: "Richmond" },
      { name: "Brunswick" },
      { name: "Docklands" },
      { name: "Southbank" },
      { name: "Prahran" },
      // Add more Melbourne suburbs here
    ],
  });

  await prisma.category.createMany({
    data: [
      { name: "Fitness" },
      { name: "Arts" },
      { name: "Tech" },
      { name: "Business" },
      { name: "Cooking" },
      { name: "Music" },
      { name: "Education" },
      { name: "Language" },
      { name: "Crafts" },
      { name: "Fashion" },
      { name: "Photography" },
      { name: "Health" },
      // Add more categories here
    ],
  });

  const locations = await prisma.location.findMany();
  const categories = await prisma.category.findMany();

  const expertsData = [
    // Expert 1
    {
      name: "John Doe",
      main_image: "https://example.com/john_doe.jpg",
      price: PRICE.REGULAR,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
      ],
      availability: "Monday to Friday",
      slug: "john-doe",
      location_id: locations[0].id,
      category_id: categories[0].id,
    },
    // Expert 2
    {
      name: "Jane Smith",
      main_image: "https://example.com/jane_smith.jpg",
      price: PRICE.CHEAP,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      images: [
        "https://example.com/image3.jpg",
        "https://example.com/image4.jpg",
      ],
      availability: "Weekends only",
      slug: "jane-smith",
      location_id: locations[1].id,
      category_id: categories[1].id,
    },
    // Add more experts here
  ];

  await prisma.guide.createMany({
    data: expertsData,
  });

  res.status(200).json({ name: "hello" });
}