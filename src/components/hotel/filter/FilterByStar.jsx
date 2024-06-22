"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const FilterByStar = () => {
    const [query, setQuery] = React.useState([]);
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const pathname = usePathname();
    const { replace } = useRouter()

    const handleChange = (event) => {
        event.preventDefault();
        const { name, checked } = event.target;
        if (checked) {
            setQuery((prev) => [...prev, name]);
        } else {
            setQuery((prev) => prev.filter((item) => item !== name));
        }
    };

    React.useEffect(() => {
        const category = params.get('stars');

        if (category) {
            const decodedCategory = decodeURI(category);
            const queryInCategory = decodedCategory.split('|');
            setQuery(queryInCategory);
        }

    }, [params]);


    React.useEffect(() => {
        const startQuery = encodeURI(query.join("|"));
        if (query.length > 0) {
            params.set("stars", startQuery);
        } else {
            params.delete("stars");
        }
        replace(`${pathname}?${params.toString()}`)
    }, [params, pathname, query, replace])

    return (
        <div>
            <h3 className="font-bold text-lg">Star Category</h3>
            <form action="" className="flex flex-col gap-2 mt-2">
                <label htmlFor="fiveStar">
                    <input
                        type="checkbox"
                        name="5"
                        checked={query.includes('5')}
                        id="fiveStar"
                        onChange={handleChange} />5 Star
                </label>

                <label htmlFor="fourStar">
                    <input
                        type="checkbox"
                        name="4"
                        checked={query.includes('4')}
                        id="fourStar"
                        onChange={handleChange} />4 Star
                </label>

                <label htmlFor="threeStar">
                    <input
                        type="checkbox"
                        name="3"
                        checked={query.includes('3')}
                        id="threeStar"
                        onChange={handleChange} />3 Star
                </label>

                <label htmlFor="twoStar">
                    <input
                        type="checkbox"
                        name="2"
                        checked={query.includes('2')}
                        id="twoStar"
                        onChange={handleChange} />2 Star
                </label>

                <label htmlFor="oneStar">
                    <input
                        type="checkbox"
                        name="1"
                        checked={query.includes('1')}
                        id="oneStar"
                        onChange={handleChange} />1 Star
                </label>
            </form>
        </div>
    );
}

export default FilterByStar;
