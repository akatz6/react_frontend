import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
          headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
      },
    }),
    tagTypes: ["User"],
    endpoints: () => ({}),
});

export const { useLoginMutation } = api;
