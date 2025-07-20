import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import PropertyDisplay from "@/components/property/PropertyDisplay";

export default function PropertyDetail( )   {
    const router = useRouter();
    const { id } = router.query;
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperty = async () => {
            if (!id) return;
            try{
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`);
                setProperty(response.data);
            } catch (error){
                console.error("Error fetching property datails:", error);
            }finally{
                setLoading(false);
            }
        };

        fetchProperty();
    }, [id]);

    if(loading){
        return <p>Loading...</p>;
    }

    if(!property){
        return <p>Property not found</p>;
    }

    return <PropertyDisplay property={property} />;
}