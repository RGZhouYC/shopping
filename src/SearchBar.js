import React from 'react';
import Button from './Button'
//import { NativeRouter, Route, Link } from "react-router-native";
import { Link } from 'react-router-dom'
import SearchResult from './SearchResult'

const SearchBar = ({ keyword, setKeyword }) => {
  const onClick = () => {
    console.log('click')
  }

  return (
    <div>
      <input
        className='searchbar'
        key="random1"
        value={keyword}
        placeholder={"search item"}
        onChange={(e) => setKeyword(e.target.value)} />
      <Link to='/SearchResult'>
        <Button
          color={'green'}
          text={'Go'}
          onClick={onClick} />
      </Link>
    </div>
  );
}

export default SearchBar