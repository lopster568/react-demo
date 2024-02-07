import CartTypes from "./cart.types"

const addToCart = (item) => (
    { type: CartTypes.ADD_TO_CART, payload: item }
)

const removeFromCart = (item) => (
    { type: CartTypes.REMOVE_FROM_CART, payload: item }
)

export { addToCart, removeFromCart }