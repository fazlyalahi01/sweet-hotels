import BookingCard from "./BookingCard";

const UpcomingBooking = ({ bookings }) => {
  console.log(bookings);
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">⌛️ Upcomming Bookings</h2>
      {
        bookings && bookings.length > 0 && bookings.map((booking) => {
          return (
            <div className="bg-[#F6F3E9] p-4 rounded-md" key={booking._id}>
              <BookingCard booking={booking} />
            </div>
          )
        })
      }
    </div>
  );
};

export default UpcomingBooking;
