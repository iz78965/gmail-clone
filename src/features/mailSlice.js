import {createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
    name: 'mail',
    initialState: {
        sendMessageIsOpen : false,
        selectedMAil:null,
    },
  
  reducers: {
    selectMAil: (state, action) => {
      state.selectedMAil = action.payload;
    },
    openSendMessage: (state) => {
      
      state.sendMessageIsOpen = true
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage, selectMAil } = mailSlice.actions;


export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectOpenMAil = (state) => state.mail.selectedMAil;


export default mailSlice.reducer;
