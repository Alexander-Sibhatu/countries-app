import { useState, useEffect } from 'react';
import { CountriesT } from '../type/type';

const useFetch = (url: string) => {
    const [countries, setCountries] = useState<CountriesT>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url)
        .then((response) => {
            if(!response.ok) {
                throw new Error ('Could not fetch data');
            }
            return response.json();
        })
        .then((json) => {
            setLoading(false);
            setError(null);
            setCountries(json);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
            setCountries([]);
        });
    }, [url]);



  return (
    {countries, loading, error}
  )
}

export default useFetch