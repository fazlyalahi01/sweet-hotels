import { getHotels } from "@/lib/queries";
import HotelCard from "./HotelCard";

const HotelList = async ({destination, checkin, checkout, stars}) => {
  const hotelList = await getHotels(destination, checkin, checkout, stars);
  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {
          hotelList.map((hotel) => (
            <HotelCard
              key={hotel.name}
              hotelInfo={hotel}
              checkin={checkin}
              checkout={checkout}
            />
          ))
        }
      </div>
    </div>
  );
};

export default HotelList;
