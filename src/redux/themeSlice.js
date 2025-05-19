import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => (state === "light" ? "dark" : "light"),
  },
});

// ✅ Export the action and reducer
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
