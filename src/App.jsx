import React, { useState } from 'react';
import Gallery from './components/Gallery';
import './styles/styles.css';

// Root component of the app (AI generated comment)

function App() {
  const [tours, setTours] = useState([]);

// Function to remove a tour from the list (AI generated comment)

const removeTour = (id) => {
  const updatedTours = tours.filter((tour) => tour.id !== id);
  setTours(updatedTours);
};

// Render the main application (AI generated comment)

return (
  <main>
    <h1>Our Tours</h1>
    <Gallery tours={tours} setTours={setTours} removeTour={removeTour} />
  </main>
  );
};

export default App;