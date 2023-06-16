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
<>
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
</>        
    )
}