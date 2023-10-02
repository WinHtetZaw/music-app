// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FetchData } from "../../shared/type";
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const musicApi = createApi({
  reducerPath: "musicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://deezerdevs-deezer.p.rapidapi.com/",
  }),
  endpoints: (builder) => ({
    // getPokemonByName: builder.query<Pokemon, string>({
    getSearchLists: builder.query<FetchData, string>({
      query: (q) => ({
        url: `search?q=${q}`,
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "95e083004fmshbc75283b32ec43ep190404jsnd0c8e3426803",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSearchListsQuery } = musicApi;
