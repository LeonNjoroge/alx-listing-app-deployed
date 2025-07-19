import React from "react";
import Image from "next/image";
import {PillProps} from "@/interfaces";

const PillComponent = ({ label, isActive, onClick }: PillProps) => {
    return (
        <button
            className={`px-4 py-2 rounded-full border transition-colors duration-200 ml-2 text-sm
                ${
                isActive
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-transparent text-black border-gray-300"
            }`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export default PillComponent;