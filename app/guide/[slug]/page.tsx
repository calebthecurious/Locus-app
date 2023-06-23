import { PrismaClient, Review } from "@prisma/client";
import NavBar from "../../components/NavBar";
import BookingCard from "./components/BookingCard";
import Description from "./components/Description";
import GuideNavBar from "./components/GuideNavBar";
import Header from "./components/Header";
import Images from "./components/Images";
import Rating from "./components/Rating";
import Reviews from "./components/Reviews";
import Title from "./components/TItle";

const prisma = new PrismaClient()

interface Guide {
    id: number;
    name: string;
    images: string[];
    description: string;
    slug: string;
    reviews: Review[];
}

const fetchGuideBySlug = async (slug: string):Promise<Guide> => {
    const guide = await prisma.guide.findUnique({
        where: {
            slug,
        },
        select: {
            id: true, 
            name: true,
            images: true,
            description: true,
            slug: true,
            reviews: true,
        }
    });

    if(!guide) {
        throw new Error()
    }

    return guide;
}

export default async function GuideDetails({params}: {params: {slug:string}}) {

    const guide = await fetchGuideBySlug(params.slug)

    console.log({guide})
    return (
    <>
        <div className="bg-white w-[70%] rounded p-3 shadow">
            <GuideNavBar slug={guide.slug} />
            <Title name={guide.name}/>
            <Rating reviews={guide.reviews}/>
            <Description description={guide.description}/>
            <Images images={guide.images}/>
            <Reviews reviews={guide.reviews}/>
        </div>
        <div className="w-[27%] relative text-reg ">
            <BookingCard />
        </div>
    </>        
    )
}