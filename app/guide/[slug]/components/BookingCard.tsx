import React from 'react'

export default function BookingCard() {
    return (
    <div className="fixed w-[15%] bg-white rounded p-3 shadow">
            <div className="text-center border-b pb-2 font-bold">
                <h4 className="mr-7 text-lg">
                Book an Expert
                </h4>
            </div>
            <div className="my-3 flex flex-col">
                <label htmlFor="">Level of experience</label>
                <select name="" id="" className="py-3 border-b font-light">
                <option value="">Newbie</option>
                <option value="">Hobbiest</option>
                <option value="">Experienced</option>
                <option value="">Teacher</option>
                <option value="">Expert</option>
                </select>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col w-[48%]">
                <label htmlFor="">Date</label>
                <input type="text" className="py-3 border-b font-light w-28" />
                </div>
                <div className="flex flex-col w-[48%]">
                <label htmlFor="">Time</label>
                <select name="" id="" className="py-3 border-b font-light">
                    <option value="">7:30 AM</option>
                    <option value="">9:00 AM</option>
                </select>
                </div>
            </div>
            <div className="mt-5">
            <button className='bg-red-600 rounded w-full px-4 text-white font-bold h-16'>Find a Time </button>
            </div>
        </div>
    )
}
