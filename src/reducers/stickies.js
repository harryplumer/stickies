const stickies = (state = [], action) => {
  switch( action.type ) {
    case 'ADD_STICKY':
      //{ type: 'ADD_TODO', todo: 'Buy Milk' }
      return [action.sticky, ...state]
    case 'DELETE_STICKY':
      return state.filter( s => s.id !== action.id )
    case 'EDIT_STICKY':
    let arr = state.map( s => {
      if (s.id === action.sticky.id){
          return action.sticky
        }
        else 
          return s
      })
      return arr
    default:
      return state;
  }
}

export default stickies;
