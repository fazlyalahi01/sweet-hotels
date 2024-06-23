import ProfileInfo from "@/components/user/ProfileInfo";
import PastBooking from "@/components/user/booking/PastBooking";
import UpcomingBooking from "@/components/user/booking/UpcomingBooking";
import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import { getBookingsByUserId, getUserByEmail } from "@/lib/queries";
import moment from "moment";

const BookingsPage = async () => {
    const session = await auth();
    if (!session) {
        redirect("/login");
    }


    const loggedInUser = await getUserByEmail(session?.user?.email);
    const bookings = await getBookingsByUserId(loggedInUser.id);
    const pastBookings = bookings.filter((booking) => {
        return moment(booking.checkin).valueOf() < moment().valueOf();
    })
    
    const upcomingBookings = bookings.filter((booking) => {
        return moment(booking.checkin).valueOf() > moment().valueOf();
    })
    return (
        <>
            <section>
                <div className="container">
                    <ProfileInfo />
                </div>
            </section>
            <section>
                <div className="container pb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <PastBooking bookings={pastBookings} />
                        <UpcomingBooking bookings={upcomingBookings} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default BookingsPage;
