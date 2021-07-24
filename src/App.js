import { useState, useEffect } from 'react';
import Loading from './UI/Loading';
import ToursList from './components/ToursList';
import Button from './UI/Button';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = id => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const fetchedTours = await response.json();
      setIsLoading(false);
      setTours(fetchedTours);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No more tours left</h2>
        </div>

        <Button type='button' onClick={fetchTours} className='btn'>
          refresh
        </Button>
      </main>
    );
  }
  return (
    <main>
      <ToursList tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
