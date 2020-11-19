export const reducer = (state, action) => {
  let payload = action.payload
  if (action.type === "GLOBAL_STATE_UPDATE_TO_SEARCH") {
    return { ...payload, searchMode: true }
  }
  if (action.type === "GLOBAL_STATE_UPDATE_TO_LIST") {
    return { ...payload, searchMode: false }
  }
  if (action.type === "RESET_SEARCH_MODE") {
    return { ...state, searchMode: true }
  }
  return { ...state }
}
