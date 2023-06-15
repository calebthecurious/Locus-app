import Link from "next/link";

export default function GuideCard() {
    return (
            <div className="border-b flex pb-5">
                <img src="/images/mary.jpg" alt="" className="w-44 rounded" />
                <div className="pl-5">
                    <h2 className="text-3xl">John Fraser</h2>
                    <div className="flex items-start">
                    <div className="flex mb-2">*****</div>
                    <p className="ml-2 text-sm">Awesome!</p>
                </div>
                <div className="mb-9">
                    <div className="font-light flex text-reg">
                        <p className="mr-4">$$$</p>
                        <p className="mr-4">Home Skills</p>
                        <p className="mr-4">Collingwood</p>
                    </div>
                </div>
                <div className="text-red-600">
                    <Link 
                        href="/guide/mary">
                            View more information
                    </Link>
                </div>
            </div>
        </div>
    )
}