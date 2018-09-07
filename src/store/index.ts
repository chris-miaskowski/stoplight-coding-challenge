import { createStore } from "redux";
import { appReducer } from "../reducers";

export default (initialState: any) => createStore(appReducer, initialState);
