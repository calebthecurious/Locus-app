export default function GuideCard() {
    return (
        <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
            <img src="/images/garden.jpg" alt="" className="w-full h-36" />
            <div className="p-1">
                <h3 className="font-bold text-2xl mb-2">Taking care of your plants</h3>
            <div className="flex items-start">
                <div className="flex mb-2">*****</div>
                <p className="ml-2">77 reviews</p>
            </div>
            <div className="flex text-reg font-light capitalize">
                <p className="mr-3 ">Home</p>
                <p className="mr-3">$$$$</p>
                <p>Collingwood</p>
            </div>
            <p className="text-sm mt-1 font-bold">Booked 3 times this week</p>
            </div>
        </div>
    )
}