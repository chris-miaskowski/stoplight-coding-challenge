import * as React from "react";
import { Provider } from 'react-redux';

import { PathsBlocksCollection } from "../PathsBlocksCollection";
import createStore from '../../store';

const logo = require("../../../public/icon.png");
const styles = require("../../styles.css");

class App extends React.Component<any, any> {
  public render() {
    const { api } = this.props;
    console.log("Here's the spec:", api);
    return (
      <Provider store={createStore({})}>
        <div className={styles.app}>
          <div className={styles.appHeader}>
            <img src={logo} className={styles.appLogo} alt="logo" />
            <h1>Stoplight Coding Challenge</h1>
          </div>
          <div className="p-5">
            <div id="authorization"></div>
            {api && (
              <PathsBlocksCollection paths={api.paths} api={api} />
            )}
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
