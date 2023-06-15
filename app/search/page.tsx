import Header from "../components/Header";
import NavBar from "../components/NavBar";
import GuideCard from "./components/GuideCard";

import SearchSideBar from "./components/SearchSideBar";

export default function Search() {
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
    <main className='max-w-scren-2xl m-auto bg-white'>
<NavBar />
<Header />
      
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
<SearchSideBar />
        <div className="w-5/6">
<GuideCard />
      </div>
    </div>

      {/* HEADER */}
    </main>
  </main>
    )
}