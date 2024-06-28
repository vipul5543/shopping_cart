import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
            //add func just updated the prev array or prev state
        add:(state,action) => {
            state.push(action.payload);
        },
        remove:(state,action) => {
            return state.filter((item) => item.id !== action.payload);
        },// remove funct returned a new array or we can say a new state to Slice that's why return keyword
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;