import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    openMenu: false,
  },
  reducers: {
    setOpenMenu: (state, action) => {
      state.openMenu = action.payload;
    },
  },
});

export const { setOpenMenu } = layoutSlice.actions;

export default layoutSlice.reducer;
