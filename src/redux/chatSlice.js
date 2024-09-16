import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
  },
  reducers: {
    receiveMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    sendMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { receiveMessage, sendMessage } = chatSlice.actions;
export default chatSlice.reducer;