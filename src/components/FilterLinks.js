import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions/filter';

const styles = {
  link: { textDecoration: 'underline', color: 'blue', cursor: 'pointer' }
}

const FilterLink = ({ filter, dispatch, children }) => {
  if (children === filter) {
    return(
      <Button disabled>{children}</Button>
    )
  } 
  else {
    if (children === "All"){
      return(
        <Button primary
        onClick={ () => dispatch(setFilter(children)) }
      >
        {children}
      </Button>
      )
    }
    else {
      return (
        <Button color={children.toLowerCase()}
          onClick={ () => dispatch(setFilter(children)) }
        >
          {children}
        </Button>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return { filter: state.filter }
}

export default connect(mapStateToProps)(FilterLink)
