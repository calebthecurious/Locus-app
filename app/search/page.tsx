import { PRICE, PrismaClient } from "@prisma/client";
import Header from "../components/Header";
import GuideCard from "./components/GuideCard";

import SearchSideBar from "./components/SearchSideBar";

const prisma = new PrismaClient()

interface SearchParams { city?: string; category?: string; price?: PRICE}

const fetchGUideByCity = ( searchParams: SearchParams ) => {
const where: any = {};

if(searchParams.city) {
  const location = {
    name: {
      equals: searchParams.city.toLowerCase()
    }
  }
  where.location = location  
}
if(searchParams.category) {
  const category = {
    name: {
      equals: searchParams.category.toLowerCase()
    }
  }
  where.category = category
}
if(searchParams.price) {
  const price = {
    equals: searchParams.price
  }
  where.price = price
}


const select = {
  id: true,
  name: true,
  main_image: true,
  price: true,
  category: true,
  location: true,
  slug: true,
  reviews: true,
}

  return prisma.guide.findMany({
    where,
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
  searchParams,
}: {
  searchParams: SearchParams;
}) {
    const guides = await fetchGUideByCity(searchParams)
    const location = await fetchLocations();
    const category = await fetchCategory();
    return (
      <>
          <Header />  
          <div className="flex py-4 m-auto w-2/3 justify-between items-start">
            <SearchSideBar 
              locations={location}
              categories={category}
              searchParams={searchParams}
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
