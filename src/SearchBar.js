import React from 'react';
import Button from './Button'

const SearchBar = ({keyword,setKeyword}) => {
    const onClick = () => {
        console.log('click')
    }

    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
  <div>
      <input 
     //style={BarStyling}
     className='searchbar'
     key="random1"
     value={keyword}
     placeholder={"search item"}
     onChange={(e) => setKeyword(e.target.value)}/>
     <Button
     color={'green'}
     text={'Go'}
     onClick={onClick}
     />
     </div>
  );
}

export default SearchBar