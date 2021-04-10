import PropTypes from 'prop-types'
import React from 'react';
// import Button from './Button'

const Header = ({ title }) => {
  
    return (
      <header className='header'>
        <h1>{title}</h1>
      </header>
    )
  }
  
  Header.defaultProps = {
    title: 'S&Z Shopping',
  }
  
  Header.propTypes = {
    title: PropTypes.string.isRequired,
  }

  export default Header