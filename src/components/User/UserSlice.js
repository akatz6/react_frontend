import { createSlice } from "@reduxjs/toolkit";
// import { api } from "../api/api";

/**
 * API endpoints
 */
// const userApi = api.injectEndpoints({
//   endpoints: (builder) => ({
//     updatesUser: builder.mutation({
//       query: ({ id, body }) => ({
//         url: `auth/user/${id}`,
//         method: "PUT",
//         body,
//       }),
//       invalidatesTags: ["Me"],
//     }),
//   }),
// });

/**
 * Stores token whenever login or register succeeds
 */
const userSlice = createSlice({
  name: "users",
  initialState: {
    value: {},
  },
  reducers: {
    setUserToBeEdited: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default userSlice.reducer;

// export const { useUpdatesUserMutation } = userApi;

export const { setUserToBeEdited } = userSlice.actions;
