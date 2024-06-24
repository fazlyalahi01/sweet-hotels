"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
const FilterByHighLow = () => {
    const [query, setQuery] = React.useState("");
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const pathname = usePathname();
    const { replace } = useRouter();

    console.log(pathname, "pathname");

    const handleChange = (event) => {
        // event.preventDefault();
        // const { value, checked } = event.target;
        // if (checked) {
        //     setQuery(value);
        // } else {
        //     setQuery((prev) => prev.filter((item) => item !== id));
        // }
    }


    // React.useEffect(() => {
    //     if (query) {
    //         params.set('hignOrLow', query);
    //         if (pathname.includes('?')) {

    //             replace(`${pathname}&${params.toString()}`)
    //         } else {
    //             replace(`${pathname}?${params.toString()}`)
    //         }
    //     } else {
    //         params.delete('hignOrLow');
    //     }
    // }, [query])




    return (
        <div>
            <form action="" className="flex flex-col gap-2 mt-2">
                <label for="highToLow">
                    <input
                        type="radio"
                        name="price"
                        id="highToLow"
                        value="highToLow"
                        onChange={handleChange}
                    />
                    Price High to Low
                </label>

                <label for="lowToHigh">
                    <input
                        type="radio"
                        name="price"
                        id="lowToHigh"
                        value="lowToHigh"
                        onChange={handleChange}
                    />
                    Price Low to high
                </label>
            </form>
        </div>

    );
}
export default FilterByHighLow;