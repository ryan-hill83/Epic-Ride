const initialState = {
    cartCounter: 0,
    totalPrice: 0,
    cart: [],
    cartId: 0,
    showCheckout: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD':
        let cart = state.cart.slice()
        //cart.push({id: state.cartId, content: action.payload.board})
        return {
            ...state,
            cartCounter: state.cartCounter + 1,
            totalPrice: state.totalPrice + action.payload.board.price,
            cart: cart.concat({id: state.cartId, content: action.payload.board}),
            cartId: state.cartId + 1}
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