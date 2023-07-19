"use client"
import React, { useState } from 'react';
import { partySize, times } from '../../../../data';
import DatePicker from 'react-datepicker';

export default function BookingCard({
    availability, not_available
}: {availability: string, not_available: string}) {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

    const handleChangeDate = (date: Date | null) => {
        if (date) {
            return setSelectedDate(date);
        }
        return setSelectedDate(null);
    };

    const filterTimeByGuideAvailableWindow = () => {

        const timesWithinWindow:  typeof times = [];

        let isWithinWindow = false;

        times.forEach((time) => {
            if (time.time === availability) {
                isWithinWindow = true;
            }
            if (isWithinWindow) {
                timesWithinWindow.push(time)
            }
            if(time.time === not_available){
                isWithinWindow = false
            }
        });

        return timesWithinWindow;
    };
    

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
            <div className="my-3 flex flex-col">
                <label htmlFor="">How many learners</label>
                <select name="" id="" className="py-3 border-b font-light">
                    {partySize.map(size => (
                        <option value={size.value}>{size.label}</option>
                    ))}
                </select>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col w-[48%]">
                <label htmlFor="">Date</label>
                    <DatePicker 
                        selected={selectedDate} 
                        onChange={handleChangeDate}
                        className='py-3 border-b font-light text-reg w-24'
                        dateFormat="MMMM d"
                        wrapperClassName='w-[48%]'
                    />
                </div>
                <div className="flex flex-col w-[48%]">
                <label htmlFor="">Time</label>
                <select name="" id="" className="py-3 border-b font-light">
                    {filterTimeByGuideAvailableWindow().map(time => (
                        <option value={time.time}>{time.displayTime}</option>
                    ))}
                </select>
                </div>
            </div>
            <div className="mt-5">
            <button className='bg-red-600 rounded w-full px-4 text-white font-bold h-16'>Find a Time </button>
            </div>
        </div>
    )
}
 