import NavBar from "../../../components/NavBar";
import GuideNavBar from "../components/GuideNavBar";
import Header from "../components/Header";
import Skills from "../components/Skills";

export default function SkillsMenu(){
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className='max-w-scren-2xl m-auto bg-white'>
<NavBar />
<Header />
                {/* DESCRIPTION PORTION*/}
                <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                <div className="bg-white w-[100%] rounded p-3 shadow">
                    <GuideNavBar />
                    <Skills />
                </div>
                
                </div>
                {/* DESCRIPTION PORTION*/}

            </main>
        </main>   
    )
}