import React from 'react';
import {PropertyProps} from "@/interfaces";
import Image from "next/image";
import stars from "@/public/assets/Star 2.svg";

import bath from "@/public/assets/bathtub 1.svg";
import bed from "@/public/assets/bed 1.svg";
import people from "@/public/assets/people 1.svg";

const CardComponent = (props: PropertyProps) => {
    return (
        <div className="rounded-xl shadow-md border border-gray-200 w-full max-w-sm bg-white overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            {/* Top image */}
            <div className="w-full h-48 relative">
                <Image
                    src={props.image}
                    alt={props.name}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="px-4 py-5 space-y-4">
                {/* Category section */}
                <div className="flex flex-wrap gap-2">
                    {props.category.map((category, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-100 text-xs rounded-2xl px-3 py-1 text-gray-700"
                        >
                            {category}
                        </div>
                    ))}
                </div>

                {/* Details and rating */}
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-800">{props.name}</h3>
                        <p className="text-xs text-gray-500">
                            {props.address.state}, {props.address.city}, {props.address.country}
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src={stars} alt="star rating" width={12} height={12} />
                        <span className="text-xs font-medium text-gray-700">{props.rating}</span>
                    </div>
                </div>

                {/* Info pill and price */}
                <div className="flex justify-between items-center">
                    <div className="flex gap-3 border border-gray-300 rounded-2xl px-3 py-2">
                        <div className="flex items-center gap-1 text-xs text-gray-600">
                            <Image src={bed} alt="Bed size" width={14} height={14} />
                            <span>{props.offers.bed}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-600">
                            <Image src={bath} alt="Shower count" width={14} height={14} />
                            <span>{props.offers.shower}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-600">
                            <Image src={people} alt="Occupants" width={14} height={14} />
                            <span>{props.offers.occupants}</span>
                        </div>
                    </div>

                    <div className="text-right">
          <span className="text-sm font-semibold text-gray-800">
            ${props.price}
          </span>
                        <span className="text-xs text-gray-500"> /n</span>
                    </div>
                </div>
            </div>
        </div>
    );


};

export default CardComponent;