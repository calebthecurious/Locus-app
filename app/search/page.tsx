import { PrismaClient } from "@prisma/client";
import Header from "../components/Header";
import GuideCard from "./components/GuideCard";

import SearchSideBar from "./components/SearchSideBar";

const prisma = new PrismaClient()

const fetchGUideByCity = (city: string | undefined ) => {

const select = {
  id: true,
  name: true,
  main_image: true,
  price: true,
  category: true,
  location: true,
  slug: true,
}

  if(!city) return prisma.guide.findMany({select});

  return prisma.guide.findMany({
    where: {
      location: { 
        name: {
          equals: city.toLowerCase(),
        },
      },
    },
    select,
  });
};

const fetchLocations = async () => {
  return prisma.location.findMany()
}

const fetchCategory = async () => {
  return prisma.category.findMany()
}

export default async function Search({
  searchParams
}: {
  searchParams: {city: string}
}) {
    const guides = await fetchGUideByCity(searchParams.city)
    const location = await fetchLocations();
    const category = await fetchCategory();

    console.log({ guides });
    return (
      <>
          <Header />  
          <div className="flex py-4 m-auto w-2/3 justify-between items-start">
            <SearchSideBar 
              locations={location}
              categories={category}
            />
            <div className="w-5/6">
              {guides.length ? (
                <>
                  {guides.map((guide) => (
                    <GuideCard guide={guide} key={guide.id}/>
                  ))}
                  </>
              ): (
                <p>Sorry, we found no guides in this area</p>
              )}
            </div>
          </div>
      </>

    )
}