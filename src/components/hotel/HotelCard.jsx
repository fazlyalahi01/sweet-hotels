import Image from "next/image";
import HotelSummaryInfo from "./HotelSummaryInfo";

const HotelCard = ({ hotelInfo, checkin, checkout }) => {
  const { thumbNailUrl, name } = hotelInfo;
  return (
    <div className="md:flex gap-6 border border-gray/20 p-4 rounded-md">
      <Image
        src={thumbNailUrl}
        className="max-h-[162px] w-[340px]"
        alt={name}
        height={162}
        width={240}
      />
      <HotelSummaryInfo fromListPage={true} info={hotelInfo} checkin={checkin} checkout={checkout} />
    </div>
  );
};

export default HotelCard;
