import { IAppState } from "../types";
import { LOAD_SPEC } from '../containers/PathsBlocksCollection/actions';
import { SET_API_KEY } from '../containers/ApiKey/actions';

const initialState = {
  apiKey: '123',
};

export function appReducer(state: IAppState = initialState, action: any) {
  switch (action.type) {
    case LOAD_SPEC:
      return {
        ...state,
        spec: action.spec,
      };

    case SET_API_KEY: {
      return {
        ...state,
        apiKey: action.key,
      };
    }
  }

  return state;
}
