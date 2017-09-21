import React from 'react';
import FilterLink from './FilterLink'

const Footer = () => {
  return (
    <div style={{textAlign: "center"}}>
      <FilterLink>All</FilterLink>
      <FilterLink>Yellow</FilterLink>
      <FilterLink>Green</FilterLink>
      <FilterLink>Pink</FilterLink>
    </div>
  )
}

export default Footer;