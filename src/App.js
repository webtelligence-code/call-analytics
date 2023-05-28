import { useEffect, useState } from 'react';
import './App.css';
import MainContainer from './components/containers/MainContainer';
import axios from 'axios';

const API_URL = 'https://amatoscar.pt/gap/apis/nos/callshistory.php';

function App() {
  const [calls, setCalls] = useState({});

  const getCallData = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setCalls(response.data);
        console.log('Call data fetched:', response.data);
      })
      .catch((error) => {
        console.error('Error fetching call data:', error);
      });
  };

  useEffect(() => {
    // Fetch data initially
    getCallData();

    // Set up polling interval to fetch data every 10 seconds (adjust as needed)
    const interval = setInterval(getCallData, 10000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return <MainContainer calls={calls} />;
}

export default App;
