import CartTypes from "./cart.types"
const INITIAL_STATE = []

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartTypes.ADD_TO_CART:
            return [...state, action.payload]
        case CartTypes.REMOVE_FROM_CART:
            return state.filter(item => item.id !== action.payload.id)
        default:
            return state
    }
}

export default cartReducer