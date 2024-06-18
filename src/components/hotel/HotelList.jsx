import { getHotels } from "@/lib/queries";
import HotelCard from "./HotelCard";

const HotelList = async () => {
  const hotelList = await getHotels();
  return (
    <div className="col-span-9">
      <div className="space-y-4">
        <HotelCard />
      </div>
    </div>
  );
};

export default HotelList;
