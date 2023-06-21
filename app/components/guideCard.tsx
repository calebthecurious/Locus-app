"use client";

import Link from "next/link";
import { GuideCardType } from "../page";
import Price from "./Price";

interface Props {
    guide: GuideCardType;
}

export default function GuideCard({guide}: Props) {
    return (
        <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
            <Link href={`/guide/${guide.slug}`}>
            <img src={guide.main_image} alt="" className="w-full h-36" />
            <div className="p-1">
                <h3 className="font-bold text-2xl mb-2">{guide.name}</h3>
            <div className="flex items-start">
                <div className="flex mb-2">*****</div>
                <p className="ml-2">77 reviews</p>
            </div>
            <div className="flex text-reg font-light capitalize">
                <p className="mr-3 ">{guide.category.name}</p>
                <Price price={guide.price}/>
                <p>Collingwood</p>
            </div>
            <p className="text-sm mt-1 font-bold">Booked 3 times this week</p>
            </div>
            </Link>
        </div>
    )
}