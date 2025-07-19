import React from 'react';
import {ButtonProps} from "@/interfaces";

const ButtonComponent = ({title, color}: ButtonProps) => {
    return (
        <button
            className={`px-4 py-2 rounded-full text-sm transition duration-200 hover:opacity-90 ${color}`}
        >
            {title}
        </button>
    );
};

export default ButtonComponent;