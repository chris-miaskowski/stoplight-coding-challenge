import { createStore } from "redux";
import { appReducer } from "../reducers";

export const createStores = (initialState: any) => {
  return {
    store: createStore(appReducer, initialState)
  };
};
