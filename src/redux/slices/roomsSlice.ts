import { createSlice } from "@reduxjs/toolkit";
// import socketClient from "socket.io-client";

export interface RoomHistory {
  userName: string;
  userMessageId: string;
  message: string;
}

interface Room {
  id: string;
  name: string;
  history: RoomHistory[];
}

// const websocket = socketClient("http://127.0.0.1:7000");

const roomsSlice = createSlice({
  name: "rooms",
  initialState: {
    rooms: [] as Room[],
    currentRoom: "",
    currentChat: [] as RoomHistory[],
  },
  reducers: {
    appendMessage: (
      state,
      action: {
        payload: RoomHistory;
      }
    ): void => {
      state.currentChat.push(action.payload);
    },
  },
});

export const { appendMessage } = roomsSlice.actions;

export default roomsSlice.reducer;
