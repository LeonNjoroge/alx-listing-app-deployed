import { PropertyProps } from "@/interfaces";

type Props = {
    property: PropertyProps;
};

export const PropertyDisplay = ({ property }: Props) => (
    <div>
        <h2>{property.name}</h2>
        <p>{property.rating}</p>
        {/* Add more fields as needed */}
    </div>
);