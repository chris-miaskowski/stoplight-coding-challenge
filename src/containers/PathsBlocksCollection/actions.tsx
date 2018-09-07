import { validate } from "swagger-parser";

export const LOAD_SPEC = "LOAD_SPEC";

export const loadSpec = () => (dispatch: Function) => {
  chrome.storage.local.get("spec", ({ spec }) => {
    validate(spec)
      .then(api => {
        if (spec) {
          dispatch({
            type: LOAD_SPEC,
            spec
          });
        }
      })
      .catch();
  });
};
