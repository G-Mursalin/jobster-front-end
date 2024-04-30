import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

// Initial state
const initialState = {
  isSidebarOpen: false,
};

// Create Slice
export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setToggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { setToggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;

export const selectCurrentSidebarStates = (state: RootState) => state.sidebar;
