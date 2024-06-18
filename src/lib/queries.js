const { hotelModel } = require("@/models/hotels-model");

const getHotels = async () => {

    try {
        const data = await hotelModel.find().lean();
        return data;
    } catch (e) {
        console.error(e);
    }
}

export { getHotels }