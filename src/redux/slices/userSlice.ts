import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    userName: "",
  },
  reducers: {
    loginUser: (state, action): void => {
      state.id = v4();
      state.userName = action.payload;
    },
    logoutUser: (state): any => (state.userName = ""),
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
