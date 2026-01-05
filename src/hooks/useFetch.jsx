import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP status: ${res.status}`)
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error', err.message);
        setError(err);
        setLoading(false);
      })
  }, []);
  return { data, setData, loading, error }
}

export default useFetch;