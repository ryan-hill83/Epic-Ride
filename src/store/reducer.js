const initialState = {
    cartCounter: 0,
    totalPrice: 0,
    cart: [],
    showCheckout: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD':
        return {
            ...state,
            cartCounter: state.cartCounter + 1,
            totalPrice: state.totalPrice + action.payload.board.price,
            cart: state.cart.concat(action.payload.board)}
        case 'REMOVE':
        return {...state,
             cartCounter: state.cartCounter - 1,
             totalPrice: state.totalPrice - action.payload.board.price,
             cart: state.cart.filter((item) => action.payload.board._id !== item._id)           
            }
        case 'CHECKOUT':
        return {...state,
            showCheckout: true
        }

        default: 
        return state
    }
}

export default reducer