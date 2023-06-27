"use client";

import Link from "next/link";
import LoginModal from "./LoginModal";

export default function NavBar() {
    return (
        <nav className="bg-white p-2 flex justify-between">
            <Link href="/" className='font-bold text-gray-700 text-2xl'>Locus</Link>
            <div className="flex">
                <LoginModal isSignin={true} />
                <LoginModal isSignin={false} />
            </div>
        </nav>
    )
}