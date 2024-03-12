import {createSlice} from '@reduxjs/toolkit'

let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const initialState = {
    listCart: cart
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        getCart: (state, action) => {
            let cart = localStorage.getItem('cart');
            state.listCart = JSON.parse(cart);
        },
        addToCart: (state, action) => {
            console.log('----------- action: ', action);
            const itemInCart = state.listCart.find((item) => item._id === action.payload._id);
            if (itemInCart) {
                itemInCart.quantity += action.payload.quantity;
                console.log('if itemInCart')
            } else {
                state.listCart.push({...action.payload, quantity: action.payload.quantity});
                console.log('else')
            }
            localStorage.setItem('cart', JSON.stringify(state.listCart));
            console.log('done')
        },
        incrementQuantity: (state, action) => {
            const item = state.listCart.find((item) => item._id === action.payload._id);
            item.quantity++;
            localStorage.setItem('cart', JSON.stringify(state.listCart))
        },
        decrementQuantity: (state, action) => {
            const item = state.listCart.find((item) => item._id === action.payload._id)
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }

            localStorage.setItem('cart', JSON.stringify(state.listCart));
        },
        removeItem: (state, action) => {
            state.listCart = state.listCart.filter((item) => item._id !== action.payload._id);
            localStorage.setItem('cart', JSON.stringify(state.listCart))
        },
        removeCartAll: (state, action) => {
            state.listCart = [];
            localStorage.setItem('cart', JSON.stringify(state.listCart));
        }
    }
})

export const {getCart, addToCart, removeItem, removeCartAll, decrementQuantity, incrementQuantity} = CartSlice.actions

export default CartSlice.reducer
