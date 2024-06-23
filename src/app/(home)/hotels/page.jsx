import Filter from "@/components/search/Filter";
import HotelList from "@/components/hotel/HotelList";
import Search from "@/components/search/Search";
import { refineSearchParams } from "@/utils/data-utils";



const HotelListPage = ({ searchParams: { destination, checkin, checkout, stars } }) => {
    return (
        <>
            <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]  relative grid place-items-center">
                <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
                <div className="container items-center py-12 z-50 ">
                    <Search fromList={true} destination={destination} checkin={checkin} checkout={checkout} />
                </div>
            </section>
            <section className="py-12">
                <div className="container grid md:grid-cols-12">
                    <Filter  />
                    <HotelList destination={destination} checkin={checkin} checkout={checkout} stars={refineSearchParams(stars)}/>
                </div>
            </section>
        </>
    );
};

export default HotelListPage;