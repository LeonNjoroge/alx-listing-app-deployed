import {useState} from "react";
import axios from "axios";

export default function BookingPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        billingAddress: "",
    });

    const [loading, setLoading]= useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try{
            const response = await axios.post("/api/bookings", formData);
            alert("Booking confirmed!");
        } catch (error) {
            setError("Failed to submit booking");
        }finally {
            setLoading(false);
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            {/* Form fields for booking details */}
            <button
            disabled={loading}>
                {loading ? "Processing..." : "Confirm & Pay"}
            </button>
            {error && <p className="text-red-500">{error}</p> }
        </form>
    )
}