export default function Form() {
    return (
        <div>
            <div className="mt-10 flex-flex-wrap justify-between w-[660px]W">
                <input type="text" placeholder="First name" className="border rounded p-3 w-80 mb-4" />
                <input type="text" placeholder="Last name" className="border rounded p-3 w-80 mb-4" />
                <input type="text" placeholder="Phone Number" className="border rounded p-3 w-80 mb-4" />
                <input type="text" placeholder="Email" className="border rounded p-3 w-80 mb-4" />
                <input type="text" placeholder="Occasion (Optional)" className="border rounded p-3 w-80 mb-4" />
                <input type="text" placeholder="Special Request (Optional)" className="border rounded p-3 w-80 mb-4" />
            </div>
            <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
                Complete Booking
            </button>
            <p className="mt-4 text-sm">
                By clicking "Complete Booking" you agree to Locus terms of use and Privacy Policy. Standard message rates apply. You may opt out of receiving text messages at any time.
            </p>
        </div> 
    )
}