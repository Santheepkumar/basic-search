import { useEffect, useState } from "react";
import * as SearchService from "./Search.service";

function getAccessToken(setAccessToken) {
  SearchService.getAccessToken().then((token) => {
    setAccessToken(token.token);
  });
  // .catch(() => {
  //   alert("Error Fetching Access Token");
  // });
}
function performSearch(query, acccessToken, setSearchResults) {
  SearchService.performSearch(query, acccessToken).then((results) => {
    setSearchResults(results);
  });
  // .catch(() => {
  //   alert("Error Fetching Search Results");
  // });
}

function Search() {
  const [acccessToken, setAccessToken] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getAccessToken(setAccessToken);
  }, []);

  console.log("acccessToken", acccessToken);

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
      {/* Response need to be handled */}
      <div>{JSON.stringify(searchResults, null, 2)}</div>
    </div>
  );
}

export default Search;
