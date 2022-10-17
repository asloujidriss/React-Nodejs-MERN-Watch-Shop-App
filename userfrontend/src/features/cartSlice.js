import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    articles: [],
    quantity:0,
    total : 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.quantity += 1;
            state.articles.push(action.payload.article)
            state.total = state.total +  action.payload.article.prix
        },
        removeFromCart : (state, action) => {
            state.articles.splice(state.articles.findIndex((item) => item._id === action.payload),1)
                state.total = state.total > 0 && state.total -  action.payload.article.prix
                state.quantity -= 1
        }
    }
})

export const { addToCart ,removeFromCart} = cartSlice.actions

export default cartSlice.reducer