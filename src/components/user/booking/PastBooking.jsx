import BookingCard from "./BookingCard";

const PastBooking = ({ bookings }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">🕛️ Past Bookings</h2>
      {
        bookings && bookings.length > 0 && bookings.map((booking) => {
          return (
            <div className="bg-[#ebf6e9] p-4 rounded-md" key={booking._id}>
              <BookingCard booking={booking} />
            </div>
          )
        })
      }

    </div>
  );
};

export default PastBooking;
