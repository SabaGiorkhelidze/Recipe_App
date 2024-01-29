import { useEffect } from "react";
import axios from "axios";

const useSearch = (apiURL, searchParam, setSearchResults, setIsSearchParam) => {
  const handleSearchParamRequest = () => {
    axios
      .post(apiURL, { title: searchParam })
      .then((response) => {
        setSearchResults(response.data);
        setIsSearchParam(true);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (searchParam === "") {
      setIsSearchParam(false);
    }
  }, [searchParam]);

  return { handleSearchParamRequest };
};

export default useSearch;
