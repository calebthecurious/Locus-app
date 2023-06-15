import React from 'react'

export default function Images() {
    return (
        <div className="">
        <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
            7 photos
        </h1>
        <div className="flex flex-wrap">
            <img src="/images/garden.jpg" alt="" className="w-56 h-44 mr-1 mb-1" />
            <img src="/images/jungle.jpg" alt="" className="w-56 h-44 mr-1 mb-1" />
            <img src="/images/vertical-farming.jpg" alt="" className="w-56 h-44 mr-1 mb-1" />
            <img src="/images/potting.jpg" alt="" className="w-56 h-44 mr-1 mb-1" />
            <img src="/images/watering.jpg" alt="" className="w-56 h-44 mr-1 mb-1" />
        </div>
        </div>
  )
}
