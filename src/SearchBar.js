import React, { useState, useEffect } from 'react';
import Button from './Button'
//import { NativeRouter, Route, Link } from "react-router-native";
import { Link } from 'react-router-dom'
import SearchResult from './SearchResult'

export function SearchBar(props) {
  const [name, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Searching ${name}`)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder={"search item"}
          className='searchbar'
          onChange={e => setName(e.target.value)}
        />
        <Link to='/SearchResult'>
          <input type="submit" value="Go" className='btn'/>
        </Link>
      </form>
    </div>
  );
}

// const SearchBar = ({ keyword, setKeyword }) => {
//   const onClick = () => {
//     console.log('click')
//   }

//   return (
//     <div>
//       <input
//         className='searchbar'
//         key="random1"
//         value={keyword}
//         placeholder={"search item"}
//         onChange={(e) => setKeyword(e.target.value)} />
//       <Link to='/SearchResult'>
//         <Button
//           color={'green'}
//           text={'Go'}
//           onClick={onClick} />
//       </Link>
//     </div>
//   );
// }

export default SearchBar