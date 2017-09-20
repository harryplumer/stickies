export const addSticky = (sticky) => {
  return { type: 'ADD_STICKY', sticky }
}

export const deleteSticky = (id) => {
  return {type: 'DELETE_STICKY', id}
}

export const editSticky = (sticky) => {
  return {type: 'EDIT_STICKY', sticky}
}