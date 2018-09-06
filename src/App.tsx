import * as React from "react";

import { PathsBlocksCollection } from "./components/PathsBlocksCollection";

const logo = require("../public/icon.png");
const appStyles = require("./styles/App.css");

class App extends React.Component<any, any> {
  public render() {
    const { api } = this.props;
    console.log("Here's the spec:", api);
    return (
      <div className={appStyles.app}>
        <div className={appStyles.appHeader}>
          <img src={logo} className={appStyles.appLogo} alt="logo" />
          <h1>Stoplight Coding Challenge</h1>
        </div>
        <div className="p-5">
          <div id="authorization"></div>
          <PathsBlocksCollection paths={api.paths} api={api} />
        </div>
      </div>
    );
  }
}

export default App;
