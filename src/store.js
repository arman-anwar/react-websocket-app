import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dataReducer from "./reduxStore";

const rootReducer = combineReducers({
  data: dataReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
