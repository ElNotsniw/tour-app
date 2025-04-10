import React, { useState } from 'react';
import Gallery from './components/Gallery';

// Root component of the app
function App() {
  const [tours, setTours] = useState([]);

//
const removeTour = (id) => {
  const updatedTours = tours.filter((tour) => tour.id !== id);
  setTours(updatedTours);
};

return (
  <main>
    <h1>Our Tours</h1>
    <Gallery tours={tours} setTours={setTours} removeTour={removeTour} />
  </main>
  );
};

export default App;