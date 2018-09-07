export const LOAD_SPEC = 'LOAD_SPEC';

export const loadSpec = () => (dispatch: Function) => {
  chrome.storage.local.get('spec',  ({ spec }) => {
    if (spec) {
      dispatch({
        type: LOAD_SPEC,
        spec,
      });
    }
  });
}
