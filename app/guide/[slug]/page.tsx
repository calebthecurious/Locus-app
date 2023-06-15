import NavBar from "../../components/NavBar";
import BookingCard from "./components/BookingCard";
import Description from "./components/Description";
import GuideNavBar from "./components/GuideNavBar";
import Header from "./components/Header";
import Images from "./components/Images";
import Rating from "./components/Rating";
import Reviews from "./components/Reviews";
import TItle from "./components/TItle";

export default function GuideDetails(){
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className='max-w-scren-2xl m-auto bg-white'>
                <NavBar />
                <Header />
                <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                    <div className="bg-white w-[70%] rounded p-3 shadow">
                        <GuideNavBar />
                        <TItle />
                        <Rating />
                        <Description />
                        <Images />
                        <Reviews />
                    </div>
                    <div className="w-[27%] relative text-reg ">
                        <BookingCard />
                    </div>
                </div>
            </main>
        </main>
    )
}