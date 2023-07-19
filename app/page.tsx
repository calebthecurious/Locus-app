import Header from './components/Header';
import GuideCard from './components/guideCard';
import { PrismaClient, Category, Location, PRICE, Review } from '@prisma/client';

export  interface GuideCardType {
  id: number;
  name: string;
  main_image: string;
  category: Category;
  location: Location;
  price: PRICE;
  slug: string;
  reviews: Review[];
}

const prisma = new PrismaClient();

const fetchGuides = async (): Promise<GuideCardType[]> => {
  const guides = await prisma.guide.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      category: true,
      slug: true,
      location: true,
      price: true,
      reviews: true,
    },
  });

  return guides;
};

export default async function Home() {
  const guides = await fetchGuides();

  console.log({ guides });
  return (

      <main>
        <Header />
        <div className="py-3 px-36 mt-10 flex flex-wrap">
          {guides.map((guide) => (
            <GuideCard guide={guide}/>
          ))}
        </div> 
      </main>


  )
}

