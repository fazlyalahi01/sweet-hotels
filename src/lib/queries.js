import { hotelModel } from "@/models/hotels-model";
import { ratingModel } from "@/models/rating-model";
import { reviewModel } from "@/models/review-model";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-utils";



const getHotels = async () => {

    try {
        const data = await hotelModel.find().select(["thumbNailUrl", "name", "highRate", "lowRate", "city", "propertyCategory"]).lean();
        return replaceMongoIdInArray(data);
    } catch (e) {
        console.error(e);
    }
}

async function getHotelById(hotelId) {
    const hotel = await hotelModel.findById(hotelId).lean();
    return replaceMongoIdInObject(hotel);
}


async function getReviewsForAHotel(hotelId) {
    const reviews = await reviewModel.find({ hotelId: hotelId }).lean();
    return replaceMongoIdInArray(reviews);
}

async function getRatingsForAHotel(hotelId) {
    const ratings = await ratingModel.find({hotelId: hotelId}).lean();
    return replaceMongoIdInArray(ratings);
}


export { getHotels, getHotelById, getReviewsForAHotel, getRatingsForAHotel }