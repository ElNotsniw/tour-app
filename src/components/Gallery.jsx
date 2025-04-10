import React, {use, useEffect, useState} from "react";
import TourCard from "./TourCard";

// Gallery component to display tours (AI generated comment)

const Gallery = ({tours, setTours, removeTour}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = "https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project";

// Fetch tours from the API (AI generated comment)

useEffect(() => {
    const fetchTours = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json(); // Parse the JSON response
            setTours(data);         // Update state with the fetched tours
            setError(null);        // Clear any previous errors
            setLoading(false);      // Set loading to false after fetching
        } catch (error) {
            console.error("Error fetching tours:", error);
        }
    };
    fetchTours(); // Call the fetch function (AI generated comment)
}, []);

if (loading) {
    return <div className="loading">Loading...</div>;
}

if (error) {
    return <div className="error">Error: {error.message}</div>;
}

    // Render the gallery of tours (AI generated comment)

    return (
        <section className="gallery">
            {tours.length === 0 ? (
                <div className="loading">Loading...</div>
            ) : (
                tours.map((tour) => (
                    <TourCard key={tour.id} {...tour} removeTour={removeTour} />
                ))
            )}
        </section>
        );
    };
    
    export default Gallery;