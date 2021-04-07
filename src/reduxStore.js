import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: [],   // Main List
    client: null,

};

const mySlice = createSlice({
    name: "data",
    initialState: initialState,
    reducers: {
        setConn(state, action) {
            // state.client = new W3CWebSocket('ws://localhost:3000');
            return state;
        },

        addMsg(state, action) {
            // state.messages.push ( action.payload);
            state.messages = [...state.messages, action.payload];
            return state;
        },
        sendMsg(state, action) {
            // state.sortDirection = action.payload;
            return state;
        }

    }
});

export const {
    setConn,
    sendMsg,
    addMsg,
} = mySlice.actions;
export default mySlice.reducer;
