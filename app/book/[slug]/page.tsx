import Link from "next/link"

export default function Booking(){
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className='max-w-scren-2xl m-auto bg-white'>
                {/* NAVBAR */} 
                <nav className="bg-white p-2 flex justify-between">
                    <Link href="/" className='font-bold text-gray-700 text-2xl'>Locus</Link>
                    <div className="flex">
                    <button className='bg-blue-400 text-white border p-1 px-4 rounded mr-3'>Sign In</button>
                    <button className='border p-1 px-4 rounded'>Sign Up</button>
                    </div>
                </nav>
                {/* NAVBAR END */}
                <div className="border-t h-screen">
                    <div className="py-9 w-3/5 m-auto">
                    {/* HEADER */}
                    <div className="">
                        <h3 className="font-bold">You're almost done!</h3>
                        <div className="mt-5 flex">
                        <img src="/images/indoor.jpg" alt="" className="w-32 h-18 rounded" />
                        <div className="ml-4">
                            <h1 className="text-3xl font-bold">
                            Indoor Farming
                            </h1>
                            <div className="flex mt-3">
                            <p className="mr-6">Tuesday, 22 June, 2023</p>
                            <p className="mr-6">6:00 PM</p>
                            <p className="mr-6">1 person</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* HEADER */}
                    {/* FORM */}
                    <div className="mt-10 flex-flex-wrap justify-between w-[660px]W">
                        <input type="text" placeholder="First name" className="border rounded p-3 w-80 mb-4" />
                        <input type="text" placeholder="Last name" className="border rounded p-3 w-80 mb-4" />
                        <input type="text" placeholder="Phone Number" className="border rounded p-3 w-80 mb-4" />
                        <input type="text" placeholder="Email" className="border rounded p-3 w-80 mb-4" />
                        <input type="text" placeholder="Occasion (Optional)" className="border rounded p-3 w-80 mb-4" />
                        <input type="text" placeholder="Special Request (Optional)" className="border rounded p-3 w-80 mb-4" />
                    </div>
                    <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
                        Complete Booking
                    </button>
                    <p className="mt-4 text-sm">
                        By clicking "Complete Booking" you agree to Locus terms of use and Privacy Policy. Standard message rates apply. You may opt out of receiving text messages at any time.
                    </p>
                    {/* FORM END*/}
                    </div>
                </div>
            </main>
        </main>
    )
}