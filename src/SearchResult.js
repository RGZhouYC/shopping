import axios from 'axios';
import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Button from './Button'
import './index.css';

function SearchResult() {
  const [items, setItems] = useState(null);

  const apiURL = "https://www.amazon.ca/";

  const fetchData = async () => {
    const response = await axios.get(apiURL)
    setItems(response.data)
  }

  return (
    <div className="container">
      <h1>Search Results</h1>

      {/* Fetch data from API */}
      <div>
        {/* <Button color={'green'} text={'Go'} onClick={fetchData} /> */}
        <br />
      </div>

      {/* Display data from API */}

      {/* Use JSX below for each book */}
      <div>
        <div>

        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SearchResult />, rootElement);

export default SearchResult