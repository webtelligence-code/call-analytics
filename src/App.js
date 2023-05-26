import { useEffect, useState } from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import axios from 'axios';

const API_URL = 'https://amatoscar.pt/gap/apis/nos/callshistory.php';

function App() {
  const [calls, setCalls] = useState({});

  useEffect(() => {
    const getCallData = () => {
      axios.get(API_URL)
      .then((response) => {
        setCalls(response.data)
      })
      .catch((error) => {
        console.error('Error fetching call data:', error)
      })
    }

    getCallData()
  }, [])

  return (
    <MainContainer calls={calls} />
  );
}

export default App;
