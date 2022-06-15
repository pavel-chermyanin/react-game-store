import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: []
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deletItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(item => {
                return item.id !== action.payload
            })
        }
    }
})

export const { setItemInCart, deletItemFromCart } = cartSlice.actions;

export default cartSlice.reducer