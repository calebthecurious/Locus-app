export default function SearchSideBar() {
    return (
        <div className="w-1/5">
            <div className="border-b pb-4">
            <h1 className="mb-2">Region</h1>
            <p className="font-light text-reg">Melbourne</p>
            <p className="font-light text-reg">Collingwood</p>
            <p className="font-light text-reg">Richmond</p>
            <p className="font-light text-reg">Prahran</p>
            <p className="font-light text-reg">North Melbourne</p>
            </div>
            <div className="border-b pb-4 mt-3">
            <h1 className="mb-2">Category</h1>
            <p className="font-light text-reg">Home Skills</p>
            <p className="font-light text-reg">Creative Skills</p>
            <p className="font-light text-reg">Technical Skills</p>
            <p className="font-light text-reg">Social Skills</p>
            <p className="font-light text-reg">Academic Skills</p>
            </div>
            <div className="pb-4 mt-3">
            <h1 className="mb-2">Price</h1>
            <div className="flex">
                <button className="border w-full text-reg font-light rounded-l p-2">
                $
                </button> 
                <button className="border-r border-t border-b w-full text-reg font-light p-2">
                $$
                </button> 
                <button className="border-r border-t border-b w-full text-reg font-light rounded-r p-2">
                $$$
                </button> 
            </div>
            </div>
        </div>
    )
}