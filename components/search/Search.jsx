import { useEffect, useState } from "react";
import * as SearchService from "./Search.service";

function getAccessToken(setAccessToken) {
  SearchService.getAccessToken()
    .then((token) => {
      setAccessToken(token.token);
    })
    .catch(() => {
      alert("Error Fetching Access Token");
    });
}
function performSearch(query, acccessToken, setSearchResults) {
  SearchService.performSearch(query, acccessToken)
    .then((results) => {
      setSearchResults(results);
    })
    .catch(() => {
      alert("Error Fetching Search Results");
    });
}

// Document is not clear for this api
function getStockResults(data, acccessToken, setStockResults) {
  SearchService.getStockResults(data, acccessToken).then((res) => {
    setStockResults(res);
  });
  // .catch(() => {
  //   alert("Error Fetching Stock Results");
  // });
}

function Search() {
  const [acccessToken, setAccessToken] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [stockResults, setStockResults] = useState([]);

  useEffect(() => {
    getAccessToken(setAccessToken);
  }, []);

  useEffect(() => {
    if (searchResults.length > 0) {
      getStockResults(searchResults, acccessToken, setStockResults);
    }
  }, [searchResults]);

  return (
    <div>
      <h1>Search</h1>
      <input
        type='text'
        onChange={(e) => {
          performSearch(e.target.value, acccessToken, setSearchResults);
        }}
      />
      <h2>Results</h2>
      {searchResults.map((res, i) => (
        <div key={i}>
          {res[0]} - {res[1]}, {res[2]}
        </div>
      ))}
    </div>
  );
}

export default Search;
