import {useState} from 'react';

function useInternalFunction(internalFunction) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const request = async (...props) => {
    setLoading(true);
    const response = await internalFunction(...props);
    setLoading(false);

    setError(!response.success);

    setData(response.value);
  };
  return {request, data, loading, error};
}

export default useInternalFunction;
