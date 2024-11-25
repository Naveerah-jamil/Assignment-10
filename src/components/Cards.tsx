import Image from "next/image";

export default function Cards() {
    return (
        <div className="flex flex-wrap justify-center md:justify-between lg:justify-around">
            {/* Card 1 */}
            <div className="w-full md:w-1/2 lg:w-1/3 mb-10 border bg-white p-5 rounded-md">
                <div className="flex items-center justify-center">
                    <Image
                        src="/pasta.avif"
                        alt="Pasta"
                        width={300}
                        height={300}
                        className="object-cover h-58 w-full"
                    />
                </div>
                <p className="text-center pt-10">PKR 2,000</p>
                <div className="flex justify-center items-center my-3">
                    <button className="px-10 py-4 bg-blue-600 text-white rounded-md">
                        Order Now
                    </button>
                </div>
            </div>

            {/* Card 2 */}
            <div className="w-full md:w-1/2 lg:w-1/3 mb-10 border bg-white p-5 rounded-md">
                <div className="flex items-center justify-center">
                    <Image
                        src="/broast.jpeg"
                        alt="Broast"
                        width={300}
                        height={300}
                        className="object-cover h-58 w-full"
                    />
                </div>
                <p className="text-center pt-10">PKR 1,000</p>
                <div className="flex justify-center items-center my-3">
                    <button className="px-10 py-4 bg-blue-600 text-white rounded-md">
                        Order Now
                    </button>
                </div>
            </div>

            {/* Card 3 */}
            <div className="w-full md:w-1/2 lg:w-1/3 mb-10 border  bg-white p-5 rounded-md">
                <div className="flex items-center justify-center">
                    <Image
                        src="/pasta.avif"
                        alt="Pasta"
                        width={300}
                        height={300}
                        className="object-cover h-58 w-full"
                    />
                </div>
                <p className="text-center pt-10">PKR 1,500</p>
                <div className="flex justify-center items-center my-3">
                    <button className="px-10 py-4 bg-blue-600 text-white rounded-md">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
}
