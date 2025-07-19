import React from "react";
import Image from "next/image";
import alxLogo from "@/public/assets/alx-light.png";
import {Link} from "@/interfaces";

const Footer: React.FC = () =>{
    const expLink: Link[] = [
        {label: "Apartments in Dubai", link:"#"},
        {label: "Hotels in New York", link:"#"},
        {label: "Villa in Spain", link:"#"},
        {label: "Mansion in Indonesia", link:"#"},
    ];

    const compLink: Link[] = [
        {label: "About us", link:"#"},
        {label: "Blog", link:"#"},
        {label: "Career", link:"#"},
        {label: "Customers", link:"#"},
        {label: "Brand", link:"#"},
    ];

    const helpLink: Link[] =[
        {label: "Support", link:"#"},
        {label: "Cancel booking", link:"#"},
        {label: "Refunds Process", link:"#"},
    ];

    const footLink: Link[] =[
        {label: "Terms of Service", link:"#"},
        {label: "Policy service", link:"#"},
        {label: "Cookies Policy", link:"#"},
        {label: "Partners", link:"#"},
    ];

    return (
        <>
            <div className="bg-[#34967C] py-3">

            </div>
        <footer className="bg-black text-white py-10 px-6 md:px-16">
            {/* Top Section */}
            <div className="flex flex-wrap md:flex-nowrap gap-8 mb-10">
                {/* Logo + Description */}
                <div className="w-full md:w-1/4 space-y-4">
                    <Image src={alxLogo} alt="ALX logo light" className="w-16 h-auto" />
                    <p className="text-sm text-gray-300 leading-relaxed">
                        ALX is a platform where travelers can discover and book unique,
                        comfortable, and affordable lodging options worldwide. From cozy city
                        apartments and tranquil countryside retreats to exotic beachside
                        villas, ALX connects you with the perfect place to stay for any trip.
                    </p>
                </div>

                {/* Explore Links */}
                <div className="w-full md:w-1/4 space-y-3">
                    <h3 className="text-lg font-semibold">Explore</h3>
                    <div className="flex flex-col gap-2 text-sm text-gray-400">
                        {expLink.map((val, idx) => (
                            <a
                                href={val.link}
                                key={idx}
                                className="hover:text-white transition-colors duration-200"
                            >
                                {val.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Company Links */}
                <div className="w-full md:w-1/4 space-y-3">
                    <h3 className="text-lg font-semibold">Company</h3>
                    <div className="flex flex-col gap-2 text-sm text-gray-400">
                        {compLink.map((val, idx) => (
                            <a
                                href={val.link}
                                key={idx}
                                className="hover:text-white transition-colors duration-200"
                            >
                                {val.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Help Links */}
                <div className="w-full md:w-1/4 space-y-3">
                    <h3 className="text-lg font-semibold">Help</h3>
                    <div className="flex flex-col gap-2 text-sm text-gray-400">
                        {helpLink.map((val, idx) => (
                            <a
                                href={val.link}
                                key={idx}
                                className="hover:text-white transition-colors duration-200"
                            >
                                {val.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>


            {/* Bottom Section */}
            <div className="flex justify-between border-t border-gray-100 pt-5" >
                <div className="text-xs text-gray-300 leading-relaxed">
                    <span>Some hotel requires you to cancel more than 24 hours before check-in. Details <a href="#" className="text-[#34967C]">here</a> </span>
                </div>

                <div className=" text-sm text-gray-400">
                    {footLink.map((val, idx) => (
                        <a
                            href={val.link}
                            key={idx}
                            className="hover:text-white transition-colors duration-200 pl-3"
                        >
                            {val.label}
                        </a>
                    ))}
                </div>

            </div>
        </footer>
            </>
    );

}

export default Footer;