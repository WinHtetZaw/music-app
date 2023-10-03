import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CurrentTrack, Item } from "../../shared/type";
// import { RootState } from "../store";

export interface SearchState {
  searchName: string;
  activeMusic: Item | null;
  currentPlayingIndex: number;
}

const initialState: SearchState = {
  searchName: "shakira",
  activeMusic: null,
  currentPlayingIndex: 0,
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
    setActiveMusic: (state, { payload }: PayloadAction<Item>) => {
      state.activeMusic = payload;
    },
    setCurrentPlayingIndex: (
      state,
      { payload }: PayloadAction<CurrentTrack>
    ) => {
      state.currentPlayingIndex = payload.num;
    },
    addCurrentPlayingIndex: (state) => {
      state.currentPlayingIndex++;
    },
    reduceCurrentPlayingIndex: (state) => {
      state.currentPlayingIndex--;
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const {
  setSearchName,
  setActiveMusic,
  setCurrentPlayingIndex,
  addCurrentPlayingIndex,
  reduceCurrentPlayingIndex,
} = musicSlice.actions;
// export const selectCount = (state: RootState) => state.searchName.value

export default musicSlice.reducer;
