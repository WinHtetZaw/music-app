import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../shared/type";
// import { RootState } from "../store";

export interface SearchState {
  searchName: string;
  activeMusic: Item | null;
}

const initialState: SearchState = {
  searchName: "Eminem",
  activeMusic: null,
};

export const musicSlice = createSlice({
  name: "musicSlice",
  initialState,
  reducers: {
    setSearchName: (state, { payload }: PayloadAction<string | null>) => {
      if (payload) {
        state.searchName = payload;
      } else {
        state.searchName = state.searchName;
      }
    },
    setActiveMusic: (state, { payload }) => {
      state.activeMusic = payload;
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchName, setActiveMusic } = musicSlice.actions;
// export const selectCount = (state: RootState) => state.searchName.value

export default musicSlice.reducer;
