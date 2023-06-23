import { Category, PRICE } from "@prisma/client";
import Link from "next/link";

export default function SearchSideBar({
    locations, categories, searchParams
}: {
    locations: Location[],
    categories: Category[],
    searchParams: {city?: string, category?: string, price?: PRICE}
}) {

    const prices = [{
        price: PRICE.CHEAP,
        label: "$",
        className: "border w-full text-reg text-center font-light rounded-l p-2"  
    }, {
        price: PRICE.REGULAR,
        label: "$$",
        className: "border w-full text-center text-reg font-light p-2"  
 
    }, {
        price: PRICE.EXPENSIVE,
        label: "$$$",
        className: "border w-full text-reg text-center font-light rounded-r p-2"  
 
    }]

    return (
        <div className="w-1/5">
            <div className="border-b pb-4 flex flex-col">
            <h1 className="mb-2">Region</h1>
            {locations.map((location) => (
                <Link 
                    href={{
                        pathname: "/search",
                        query: {
                            ...searchParams, 
                            city: location.name,
                        },
                }}className="font-light text-reg capitalize" key={location.id}>{location.name}</Link>
            ))}
            </div>
            <div className="border-b pb-4 mt-3 flex flex-col">
            <h1 className="mb-2">Category</h1>
            {categories.map(category => (
                <Link 
                href={{
                    pathname: "/search",
                    query: {
                        ...searchParams,
                        category: category.name,
                    },
            }}
            className="font-light text-reg capitalize" key={category.id}>{category.name}</Link>
        ))}
            </div>
            <div className="pb-4 mt-3">
            <h1 className="mb-2">Price</h1>
            <div className="flex">
                {prices.map(({price, label, className}) => (
                <Link         
                href={{
                    pathname: "/search",
                    query: {
                        ...searchParams,
                        price,
                    },
            }} 
            className={className}>                
            {label}
                </Link>
                ))} 
            </div>
            </div>
        </div>
    )
}