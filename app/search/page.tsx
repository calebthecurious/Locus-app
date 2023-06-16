import Header from "../components/Header";
import GuideCard from "./components/GuideCard";

import SearchSideBar from "./components/SearchSideBar";

export default function Search() {
    return (
<>
    <Header />
      
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
<SearchSideBar />
        <div className="w-5/6">
<GuideCard />
      </div>
    </div>

      {/* HEADER */}
    </>

    )
}