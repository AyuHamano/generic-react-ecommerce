import { createSlice } from '@reduxjs/toolkit';
import {ProductType} from "../../types/ProductType.ts";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: <ProductType>[],
        totalValue: 0,
        totalDiscount: 0
    },
    reducers: {
        addToCart(state, action) {
            const itemExists = state.items.find(item => item.id === action.payload.id);
            if (itemExists) {
                itemExists.quantity += action.payload.quantity;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }

            state.totalValue += action.payload.price;
            state.totalDiscount += action.payload.discountPercentage;
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearCart(state) {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
