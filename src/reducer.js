export const reducer = (state, action) => {
  let payload = action.payload
  if (action.type === "GLOBAL_STATE_UPDATE") {
    return { ...payload }
  }
  return { ...state }
}
