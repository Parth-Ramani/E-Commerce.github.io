const { GET_SAMPLE } = require('../types')

export const addToCartFunction = product => {
  return (dispatch, getState) => {
    let state = getState()
    let cartProducts = state.sampleData.cartProducts
    if (cartProducts?.find(obj => obj?.id == product?.id)) {
      dispatch({
        type: GET_SAMPLE,
        payload: {
          cartProducts: cartProducts?.filter(obj => obj?.id !== product?.id)
        }
      })
    } else {
      dispatch({
        type: GET_SAMPLE,
        payload: {
          cartProducts: [product, ...(cartProducts || [])]
        }
      })
    }
  }
}
