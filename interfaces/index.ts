import {StaticImageData} from "next/image";

export interface CardProps{}

export interface ButtonProps{
    title: string;
    color: string;
}

export interface PropertyProps {
    name:     string;
    address:  Address;
    rating:   number;
    category: string[];
    price:    number;
    offers:   Offers;
    image:    StaticImageData;
    discount: string;
}

export interface Address {
    state:   string;
    city:    string;
    country: string;
}

export interface Offers {
    bed:       string;
    shower:    string;
    occupants: string;
}

export interface Link {
    label: string;
    link: string;
}
export interface PillProps{
    label: string;
    isActive?: boolean;
    onClick?: () => void;
}

export const PROPERTY_CATEGORIES = [
    "24h Checkin",
    "Beachfront",
    "Chef Service",
    "City Center",
    "City View",
    "Cliffside",
    "Countryside",
    "Desert View",
    "Fireplace",
    "Free Breakfast",
    "Free Kayaks",
    "Free Parking",
    "Free WiFi",
    "Garden",
    "Guided Tours",
    "Historical",
    "Hiking Trails",
    "Hot Tub",
    "Infinity Pool",
    "Lakeside",
    "Luxury Villa",
    "Mountain View",
    "Ocean View",
    "Pet Friendly",
    "Pool",
    "Private Dock",
    "Private Garden",
    "Private Pool",
    "Public Transport",
    "Riverfront",
    "Riverside",
    "Safari",
    "Sea View",
    "Secluded",
    "Self Checkin",
    "Ski Access",
];

import {ReactNode} from "react";

export interface LayoutProps {
    children: ReactNode;
}