import Search from "@/components/search/Search";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

export default function Home() {
    return (
        <section className="bg-[#F6F3E9]  max-h-screen relative grid place-items-center bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-12">
            <div className="absolute inset-0 bg-black opacity-10 z-0"></div>
            <div className="container items-center pb-12 z-20">
                <div className="col-span-7">
                    <h1 className="font-bold text-3xl lg:text-5xl my-4 text-center lg:w-8/12 mx-auto ">
                        <p className="text-gray-200">Hotel for memorable moments</p>
                        <p className="text-white">Rich in emotions</p>
                    </h1>
                    <p className="my-2 text-white text-center">
                        We have 459 rooms spread throuout Indonesia with room
                        standards equivalent to 5 star hotels.
                    </p>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Search />
                    </Suspense>
                </div>
            </div>
        </section>
    );
}