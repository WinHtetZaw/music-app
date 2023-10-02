import { configureStore } from "@reduxjs/toolkit";
import { musicApi } from "./services/musicApi";
import musicSlice from "./features/musicSlice";
import { billboardApi } from "./services/billboardApi";

export const store = configureStore({
  reducer: {
    musicSlice: musicSlice,
    // Add the generated reducer as a specific top-level slice
    [musicApi.reducerPath]: musicApi.reducer,
    [billboardApi.reducerPath]: billboardApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(musicApi.middleware, billboardApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
