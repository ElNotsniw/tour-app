import React, {use, useEffect, useState} from "react";
import TourCard from "./TourCard";

// Gallery component to display tours (AI generated comment)

const Gallery = ({tours, setTours, removeTour}) => {
    const [tours, setTours] = useState([]);
    const url = 'https://course-api.com/react-tours-project';

// Fetch tours from the API (AI generated comment)

useEffect(() => {
    const fetchTours = async () => {
        try {
            const response = await fetch(url); // Fetch data from the API
            const data = await response.json(); // Parse the JSON response
            setTours(data);         // Update state with the fetched tours
        } catch (error) {
            console.error("Error fetching tours:", error);
        }
    };
    fetchTours(); // Call the fetch function (AI generated comment)
}, []);

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