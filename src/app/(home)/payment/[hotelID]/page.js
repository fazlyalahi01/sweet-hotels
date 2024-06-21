
import PaymentForm from "@/components/payment/PaymentForm";
import { auth } from "../../../../../auth";
import { redirect } from "next/navigation";
import { getHotelById, getUserByEmail } from "@/lib/queries";
import { getDayCountFromDate } from "@/utils/data-utils";

const PaymentPage = async ({ params: { hotelID }, searchParams: { checkin, checkout } }) => {
  const session = await auth();
  const { user: { name, email } } = session;
  const checkinUser = await getUserByEmail(email);
  const hotelInfo = await getHotelById(hotelID, checkin, checkout);

  if (!session) {
    redirect("/login");
  }


  const price = (hotelInfo.lowRate + hotelInfo.highRate) / 2;
  return (
    <section className="container">
      <div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
        <h2 className="font-bold text-2xl">Payment Details</h2>
        <p className="text-gray-600 text-sm">You have picked <b>{hotelInfo.name}</b> and price is <b>${price}</b> for {getDayCountFromDate(checkin, checkout)} days
        </p>
        <PaymentForm
          checkinUserInfo={checkinUser}
          hotelInfo={hotelInfo}
          checkin={checkin}
          checkout={checkout}
        />
      </div>
    </section>
  )
}

export default PaymentPage