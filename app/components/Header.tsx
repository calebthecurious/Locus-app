"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const router = useRouter();
    const [location, setLocation] = useState("");

    return (
        <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
            <div className="text-center mt-10">
                <h1 className='text-white text-5xl font-bold mb-2'>Find a skill to learn today!</h1>
            {/* SEARCH BAR */}
            <div className="text-left text-lg py-3 m-auto flex justify-center">
                <input 
                type="text" 
                className="rounded mr-3 p-2 w-[450px]" 
                placeholder='Start Searching'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                />
            </div>
            <button 
                className="rounded bg-red-600 px-9 py-2 text-white "
                onClick={() => {
                if (location === "banana") return;
                router.push('/search');
                }}  
            >
                Let's go!
            </button>
            {/* SEARCH BAR */}
            </div>
        </div>  
    )
}