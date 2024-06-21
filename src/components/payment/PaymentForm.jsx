"use client";
import { useRouter } from "next/navigation";
import React from "react";
const PaymentForm = ({ checkinUserInfo, hotelInfo, checkin, checkout }) => {
  const router = useRouter();
  const price = (hotelInfo.lowRate + hotelInfo.highRate) / 2;
  const [paymentInfo, setPaymentInfo] = React.useState({
    name: checkinUserInfo.name || "",
    email: checkinUserInfo.email || "",
    checkin: checkin || "",
    checkout: checkout || "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })

  const handlechange = (e) => {
    const { name, value } = e.target;

    setPaymentInfo({ ...paymentInfo, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      hotelId: hotelInfo.id,
      userId: checkinUserInfo.id,
      checkin: checkin,
      checkout: checkout,
    }

    try {
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      res.status === 201 && router.push("/bookings");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="my-8" onSubmit={handleSubmit}>
      <div className="my-4 space-y-2">
        <label htmlFor="name" className="block">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={paymentInfo.name}
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          onChange={handlechange}
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={paymentInfo.email}
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          disabled
        />
      </div>

      <div className="my-4 space-y-2">
        <span>Check in</span>
        <h4 className="mt-2">
          <input
            type="date"
            name="checkin"
            id="checkin"
            value={paymentInfo.checkin}
            onChange={handlechange} />
        </h4>
      </div>

      <div className="my-4 space-y-2">
        <span>Checkout</span>
        <h4 className="mt-2">
          <input
            type="date"
            name="checkout"
            id="checkout"
            value={paymentInfo.checkout}
            onChange={handlechange} />
        </h4>
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="card" className="block">
          Card Number
        </label>
        <input
          type="text"
          id="card"
          name="cardNumber"
          value={paymentInfo.cardNumber}
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          onChange={handlechange}
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="expiry" className="block">
          Expiry Date
        </label>
        <input
          type="text"
          id="expiry"
          name="expiryDate"
          value={paymentInfo.expiryDate}
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          onChange={handlechange}
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="cvv" className="block">
          CVV
        </label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          value={paymentInfo.cvv}
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          onChange={handlechange}
        />
      </div>

      <button type="submit" className="btn-primary w-full bg-primary">
        Pay Now ( ${price} )
      </button>
    </form>
  );
};

export default PaymentForm;
