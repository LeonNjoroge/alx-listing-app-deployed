import React from "react";
import Image from "next/image";
import logo from "@/public/assets/alx-logo.svg";
import search from "@/public/assets/search.svg";
import Button from "@/components/common/Button";

import apartment from "@/public/assets/header/apartment 1.png";
import barn from "@/public/assets/header/barn 1.png";
import cabin from "@/public/assets/header/cabin 1.png";
import castle from "@/public/assets/header/castle-tower 1.png";
import cottage from "@/public/assets/header/cottage 1.png";
import farm from "@/public/assets/header/farm 1.png";
import home from "@/public/assets/header/home 1.png";
import island from "@/public/assets/header/island (1) 1.png";
import keyChain from "@/public/assets/header/key-chain 1.png";
import livingRoom from "@/public/assets/header/living-room 1.png";
import mansion from "@/public/assets/header/mansion 1.png";
import palmTree from "@/public/assets/header/palm-tree 1.png";
import pool from "@/public/assets/header/swimming-pool 1.png";
import tent from "@/public/assets/header/tent 1.png";
import treehouse from "@/public/assets/header/treehouse (1) 1.png";
import vacations from "@/public/assets/header/vacations 1.png";
import villa from "@/public/assets/header/villa 1.png";

const Header: React.FC = () => {

    const fields = [
        { label: "Location", type: "text", placeholder: "Search for destination" },
        { label: "Check In", type: "date"},
        { label: "Check Out", type: "date"},
        { label: "People", type: "number", placeholder: "Add Guests", min: 1 },
    ];

    const header_images = [
        { label: "Rooms", image: livingRoom},
        { label: "Mansion", image: mansion},
        { label: "Countryside", image: farm},
        { label: "Villa", image: villa},
        { label: "Tropical", image: palmTree},
        { label: "New", image: keyChain},
        { label: "Amazing Pool", image: pool},
        { label: "Beach house", image: vacations},
        { label: "Island", image: island},
        { label: "Camping", image: tent},
        { label: "Apartment", image: apartment},
        { label: "House", image: home},
        { label: "Lakefront", image: cottage},
        { label: "Farm house", image: barn},
        { label: "Treehouse", image: treehouse},
        { label: "Cabins", image: cabin},
        { label: "Castles", image: castle},
        { label: "Lakeside", image: farm}
    ];

    return (
        <header className="bg-white px-6 py-3 flex-col items-center justify-between shadow-md gap-6 mb-1">
            {/* Logo and Search level*/}
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="w-1/4 flex items-center ">
                    <Image src={logo} alt="page logo" width={65} height={40} />
                </div>

                {/* Search bar */}
                <div className="w-2/4 bg-white rounded-full px-6 py-1 flex items-center justify-between gap-4 shadow">
                    {fields.map((field, idx) => (
                        <div
                            key={idx}
                            className={
                                `flex flex-col text-xs text-gray-600 ${
                                    field.label === "Location" ? "w-[180px]" :
                                        field.label.includes("Date") ? "w-[120px]  border-l border-l-gray-200 pl-4" :
                                            field.label === "People" ? "w-[105px] border-l border-l-gray-200 pl-3" :
                                                "w-auto"
                                }`
                            }
                        >
                            <span className="font-medium text-gray-800">{field.label}</span>
                            <input
                                type={field.type}
                                placeholder={field.placeholder}
                                min={field.min}
                                className="bg-transparent outline-none text-sm"
                            />
                        </div>
                    ))}
                    {/* TODO: change image bg color to use bg-secondary */}
                    <Image
                        src={search}
                        alt="search icon"
                        width={40}
                        height={40}
                        className="bg-orange-400 rounded-full p-2.5"
                    />
                </div>

                {/* Buttons */}
                <div className="w-1/4 flex justify-end gap-3">
                    <Button title="Sign In" color="bg-green-500 text-white" />
                    <Button title="Sign Out" color="bg-white border border-gray-300 text-gray-800" />
                </div>
            </div>

            {/* Room types Level */}
            <div className="flex  justify-between mt-3 pt-3 px-3 border-t border-t-gray-300">
                {header_images.map((header_img,idx) => (
                        <a
                            href="#"
                            key={idx}
                            className="flex flex-col items-center gap-1 hover:opacity-80">
                                <Image src={header_img.image} alt={header_img.label} width={25} height={10} />
                                <span className="text-gray-500 text-xs">{header_img.label}</span>
                        </a>
                    )
                )}
            </div>
        </header>
    );
};

export default Header;
