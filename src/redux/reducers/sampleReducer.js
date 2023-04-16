import { GET_SAMPLE } from '../types'

const initialState = {
  sample: [],
  loading: true
}

const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SAMPLE:
      return {
        ...state,
        ...(action?.payload || {})
      }

    default:
      return state
  }
}

export default sampleReducer
