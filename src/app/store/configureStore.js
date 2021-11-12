import { configureStore } from "@reduxjs/toolkit";
import testReducer from "../../features/sandbox/SandboxSlice";
import eventReducer from "../../features/events/eventSlice";
import modalReducer from "../common/modal/modalSlice";
import authReducer from "../../features/auth/authSlice";
import asyncReducer from "../asyncSlice/asyncSlice";

export const store = configureStore({
  reducer: {
    test: testReducer,
    event: eventReducer,
    modal: modalReducer,
    auth: authReducer,
    async: asyncReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});