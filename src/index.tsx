import * as React from "react";
import * as ReactDOM from "react-dom";
import { validate } from 'swagger-parser';

import { Provider, connect } from "react-redux";
import { createStores } from "./stores";
import App from "./App";

require("./styles/index.css");

const mount = (RootApp: any) => {
  const ConnectedRootApp = connect(
    state => state,
    dispatch => ({})
  )(RootApp);  

  chrome.storage.local.get("spec", ({ spec }) => {    
    validate(spec).then(api => {
      ReactDOM.render(
        <Provider {...createStores({ api })}>
          <ConnectedRootApp />
        </Provider>,
        document.getElementById("root")
      );
    }).catch(error => {
      console.error(error);
      // TODO: add a nice UI warning
    });
  });
};

mount(App);
