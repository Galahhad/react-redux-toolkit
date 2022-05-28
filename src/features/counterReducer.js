import { createReducer } from "@reduxjs/toolkit";
import { add, down, random, clear } from '../actions/actions';

const initialState = {
    value: 0
}

export const counterReducer = createReducer(initialState, (builder) => {
    builder.addCase(add, (state) => {
        state.value += 1
    })
    builder.addCase(down, (state) => {
        state.value -= 1
    })
    builder.addCase(random, (state, action) => {
        state.value = action.payload;
    })
    builder.addCase(clear, (state) => {
        state.value = 0
    })
})