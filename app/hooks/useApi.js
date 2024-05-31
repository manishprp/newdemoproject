import {useState} from 'react';

function useApi(apiFunc) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const request = async (...props) => {
    setLoading(true);
    const response = await apiFunc(...props);
    setLoading(false);
    if (!response?.ok) {
      return setError(true);
    }
    setError(false);
    setData(response.data);
  };
  return {request, data, loading, error};
}

export default useApi;
