import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

/**
 * API endpoints
 */
const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (credentials) => ({
        url: "auth/users",
        method: "GET",
        body: credentials,
        responseHandler: (response) => response.text(),
      }),
      providesTags: ["Me"],
    }),
    createLogin: builder.mutation({
      query: (credentials) => ({
        url: "auth/register",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Me"],
    }),
    updatesUser: builder.mutation({
      query: ({ id, body }) => ({
        url: `auth/user/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Me"],
    }),
  }),
});

/**
 * Stores token whenever login or register succeeds
 */
const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: {},
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getUsers.matchFulfilled,
      (state, { payload }) => {
        return JSON.parse(payload);
      }
    );
  },
});

export default usersSlice.reducer;

export const { useGetUsersQuery, useUpdatesUserMutation } = usersApi;
