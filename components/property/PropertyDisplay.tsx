import { PropertyProps } from "@/interfaces";

type Props = {
    property: PropertyProps;
};

export default function PropertyDisplay({ property }: Props) {
    return (
        <div>
            <h1>{property.name}</h1>
            <p>{property.rating}</p>
            {/* Add more fields as needed */}
        </div>
    );
}