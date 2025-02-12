import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    const getDataFromAPI = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.warn(error);
      }
    };

    getDataFromAPI();
  }, []);

  return data;
};
