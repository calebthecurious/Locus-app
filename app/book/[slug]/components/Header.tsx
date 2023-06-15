import React from 'react'

export default function Header() {
    return (
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
    )
}
