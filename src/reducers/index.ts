import { SET_API_KEY } from "../containers/ApiKey/actions";
import { SET_SECURITY_DEFINITION_NAME } from "../containers/Authentication/actions";
import { LOAD_SPEC } from "../containers/PathsBlocksCollection/actions";
import { SET_SCHEME } from "../containers/Scheme/actions";
import { IAppState } from "../types";

const initialState = {
  apiKey: "123"
};

export function appReducer(state: IAppState = initialState, action: any) {
  switch (action.type) {
    case LOAD_SPEC:
      const securityDefinitionNames = Object.keys(
        action.spec.securityDefinitions
      );
      return {
        ...state,
        spec: action.spec,
        scheme: action.spec.schemes.length && action.spec.schemes[0],
        securityDefinitionName:
          securityDefinitionNames.length && securityDefinitionNames[0]
      };

    case SET_SECURITY_DEFINITION_NAME:
      return {
        ...state,
        securityDefinitionName: action.securityDefinitionName
      };

    case SET_API_KEY: {
      return {
        ...state,
        apiKey: action.key
      };
    }

    case SET_SCHEME: {
      return {
        ...state,
        scheme: action.scheme
      };
    }
  }

  return state;
}
