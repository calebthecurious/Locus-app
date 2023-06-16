"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {    
    const router = useRouter();
    const [location, setLocation] = useState("");
  return (
    <div>
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
    </div>
  )
}
