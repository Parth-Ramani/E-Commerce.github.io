import { EDIT_HEPLER } from '../types'

const initialState = {
  openDrawer: false
}
const heplerReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_HEPLER:
      return {
        ...state,
        ...(action?.payload || {})
      }

    default:
      return state
  }
}

export default heplerReducer
