export default function SkillsMenu(){
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className='max-w-scren-2xl m-auto bg-white'>
                {/* NAVBAR */}
                <nav className="bg-white p-2 flex justify-between">
                <a href="" className='font-bold text-gray-700 text-2xl'>Locus</a>
                <div className="flex">
                    <button className='bg-blue-400 text-white border p-1 px-4 rounded mr-3'>Sign In</button>
                    <button className='border p-1 px-4 rounded'>Sign Up</button>
                </div>
                </nav>
                {/* NAVBAR */}
                {/* HEADER */}
                <div className="h-96 overflow-hidden">
                <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
                    <h1 className="text-7xl text-white capitalize text-shadow text-center">
                    Tom Green
                    </h1>
                </div>
                </div>
                {/* HEADER */}
                {/* DESCRIPTION PORTION*/}
                <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                <div className="bg-white w-[100%] rounded p-3 shadow">
                    {/* SKILL NAVbar */}
                    <nav className="flex text-reg border-b pb-2">
                    <a href="" className='mr-7'>Overview</a>
                    <a href="" className='mr-7'>Menu</a>
                    </nav>
                    
                    {/* SKILL NAVbar */}
                    {/* CATALOGUE */}
                    <main className="bg-white mt-5">
                    <div className="">
                        <div className="mt-4 pb-1 mb-1">
                        <h1 className="font-bold text-4xl">
                            Catalogue
                        </h1>
                        </div>
                        <div className="flex flex-wrap justify-between">
                        {/* CATALOG CARD */}
                        <div className="border rounded p-3 w-[49%] mb-3">
                            <h3 className="font-bold text-lg">
                            Propogation
                            </h3>
                            <p className="font-light mt-1 text-sm">Learn to grow plants from seeds</p>
                            <p className="mt-7">$39.00</p>
                        </div>
                        {/* CATALOG CARD */}
                        </div>
                    </div>
                    </main>
                    {/* CATALOGUE */}
                </div>
                
                </div>
                {/* DESCRIPTION PORTION*/}

            </main>
        </main>   
    )
}