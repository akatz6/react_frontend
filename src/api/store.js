import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../components/Auth/AuthSlice";
import usersReducer from "../components/Users/UsersSlice";
import userReducer from "../components/User/UserSlice";
import { api } from "./api";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    users: usersReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
