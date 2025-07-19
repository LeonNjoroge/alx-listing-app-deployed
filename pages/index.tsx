import Image from "next/image";

import hero from "@/public/assets/Hero Section.png";
import {PROPERTYLISTINGSAMPLE} from "@/constants";
import Pill from "@/components/common/Pill";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import {useEffect, useState} from "react";
import {PROPERTY_CATEGORIES} from "@/interfaces";
import filter from "@/public/assets/Filter.svg";




export default function Home() {
    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
    const [filterData, setFilterData] = useState(PROPERTYLISTINGSAMPLE);
    const [filterValues, setFilterValues] = useState<string[]>([]);


    useEffect(() => {
        const randomized = [...PROPERTY_CATEGORIES]
            .sort(() => Math.random() - 0.5)
            .slice(0, 6);
        setFilterValues(randomized);
    }, []);

    const handleFilterClick = (value: string) => {
        if (value === "All" || value === selectedFilter) {
            setSelectedFilter(null);
            setFilterData(PROPERTYLISTINGSAMPLE);
        } else {
            setSelectedFilter(value);
            const filtered = PROPERTYLISTINGSAMPLE.filter((item) =>
                item.category.includes(value)
            );
            setFilterData(filtered);
        }
    };



    return (
    <div className="w-full px-10 py-3">
      {/* Hero section */}
      <div>
        <Image src={hero} alt="Hero section" />
      </div>

        {/* Filter section*/}
        <div className="flex justify-between">
            <div className="py-5 flex">
                {/* "All" pill to reset filter */}
                <Pill
                    label="All"
                    isActive={selectedFilter === null}
                    onClick={() => handleFilterClick("All")}
                />
                {filterValues.map((value, idx)=>(
                    <Pill
                        key={idx}
                        label={value}
                        isActive={selectedFilter === value}
                        onClick={() => handleFilterClick(value)}
                    />
                ))}

            </div>

            <div className="flex items-center gap-4 flex-wrap py-4">
                {/* Filter Pill */}
                <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <span className="text-sm font-medium text-gray-700">Filter</span>
                    <Image src={filter} alt="filter logo" className="w-4 h-4" />
                </div>

                {/* Sort By Pill */}
                <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <span className="text-sm font-medium text-gray-700">Sort by: Highest Price</span>
                </div>
            </div>
        </div>


        {/* Card section */}
        <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterData.map((property,idx) => (
                <Card name={property.name} address={property.address} rating={property.rating} category={property.category} price={property.price} offers={property.offers} image={property.image} discount={property.discount} />
            ))}
        </div>

        {/* Show more section */}
        <div className="flex flex-col items-center  px-5 py-16 text-center">
            <Button title="Show more" color="bg-black text-white" />
            <h4 className="pt-2">Click to see more listings</h4>
        </div>
    </div>
  );
}
