"use client"
import moment from "moment";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Search = ({ fromList, destination, checkin, checkout }) => {
  const params = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const now = moment();

  const [searchTerm, setSearchTerm] = React.useState({
    destination: destination || "Palermo",
    checkin: checkin || now.format("YYYY-MM-DD"),
    checkout: checkout || now.add(1, "d").format("YYYY-MM-DD")
  })
  const [allowSearch, setAllowSearch] = React.useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target
    const state = { ...searchTerm, [name]: value };
    if (
      moment(state.checkin).isAfter(state.checkout)
    ) {
      setAllowSearch(false);
    } else {
      setAllowSearch(true);
    }

    setSearchTerm(state);
  }

  const handleSearch = () => {
    const searchParams = new URLSearchParams(params);
    searchParams.set("destination", searchTerm?.destination);
    if (searchTerm.checkin && searchTerm.checkout) {
      searchParams.set("checkin", searchTerm?.checkin);
      searchParams.set("checkout", searchTerm?.checkout);
    }

    if (pathname.includes("hotels")) {
      replace(`?${searchParams.toString()}`)
    } else {
      replace(`/hotels?${searchParams.toString()}`)
    }
  }

  return (
    <>
      <div className="lg:max-h-[250px] mt-6 ">
        <div id="searchParams" className={fromList && "!shadow-none"}>
          <div>
            <span>Destination</span>
            <h4 className="mt-2">
              <select name="destination" id="destination" defaultValue={searchTerm?.destination} onChange={handleChange}>
                <option value="Puglia">Puglia</option>
                <option value="Catania">Catania</option>
                <option value="Palermo">Palermo</option>
                <option value="Frejus">Frejus</option>
                <option value="Paris">Paris</option>
              </select>
            </h4>
          </div>

          <div>
            <span>Check in</span>
            <h4 className="mt-2">
              <input
                type="date"
                name="checkin"
                id="checkin"
                value={searchTerm?.checkin}
                onChange={handleChange} />
            </h4>
          </div>

          <div>
            <span>Checkout</span>
            <h4 className="mt-2">
              <input
                type="date"
                name="checkout"
                id="checkout"
                value={searchTerm?.checkout}
                onChange={handleChange} />
            </h4>
          </div>
        </div>
      </div>

      <button
        disabled={!allowSearch}
        onClick={handleSearch}
        className="search-btn bg-primary">🔍️ {fromList ? "Modify Search" : "Search"}</button>
    </>
  );
};

export default Search;
