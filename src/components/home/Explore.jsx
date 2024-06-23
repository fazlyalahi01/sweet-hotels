import { destinations } from "@/constants";
import Image from "next/image";

const Explore = () => {
    return (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Explore Bangladesh</h2>
            <p className="mb-8 ">
              Prepare to experience Bangladeshs rich culture and explore the majestic beauties of Cox’s Bazar, <br className="hidden md:block" />Sylhet, Bandarban, Sajek Valley, Rangamati etc. Plan your trip now!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {destinations.map((destination) => (
                <div key={destination.name} className="relative overflow-hidden rounded-xl shadow-lg">
                  <Image src={destination.image} alt={destination.name} className="w-full object-cover hover:scale-105 transition-all duration-300" height={400} width={400} />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                    <h3 className="text-white text-lg font-semibold">{destination.name}</h3>
                    <p className="text-white">{destination.hotels} Hotels Available</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}
export default Explore;