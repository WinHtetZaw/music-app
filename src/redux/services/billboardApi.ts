import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const billboardApi = createApi({
  reducerPath: "billboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://billboard-api2.p.rapidapi.com/",
  }),
  endpoints: (builder) => ({
    // getPokemonByName: builder.query<Pokemon, string>({
    getArtists: builder.query<unknown, { from: number; to: number }>({
      query: ({ from, to }) => ({
        url: `artist-100?date=2019-05-11&range=${from}-${to}`,
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "95e083004fmshbc75283b32ec43ep190404jsnd0c8e3426803",
          "X-RapidAPI-Host": "billboard-api2.p.rapidapi.com",
        },
      }),
    }),
  }),
});

export const { useGetArtistsQuery } = billboardApi;
