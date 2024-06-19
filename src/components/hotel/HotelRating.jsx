import { getRatingsForAHotel } from "@/lib/queries";

const HotelRating = async ({ id }) => {
    const ratings = await getRatingsForAHotel(id);

    const getRatingDescription = (avgRating) => {
        switch (avgRating) {
            case 0:
                return "No Rating Available";
            case avgRating > 0 && avgRating <= 2:
                return "Poor";
            case avgRating > 2 && avgRating <= 3:
                return "Average";
            case avgRating > 3 && avgRating <= 4:
                return "Good";
            case avgRating > 4:
                return "Very Good";
        }
    }

    let avgRating = 0;

    if (ratings.length === 1) {
        avgRating = ratings[0].rating;
    }
    if (ratings.length > 1) {
        avgRating = ratings.reduce((item, currentValue) => {
            return item.rating + currentValue.rating
        }) / ratings.length;
    }


    return (
        <>
            <div className="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
                {avgRating}
            </div>
            <span className="font-medium">{getRatingDescription(avgRating)}</span>
        </>
    )
}

export default HotelRating