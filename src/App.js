import { useState, useEffect } from 'react';
import Loading from './UI/Loading';
import ToursList from './components/ToursList';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

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
  return (
    <main>
      <ToursList tours={tours} />
    </main>
  );
}

export default App;
