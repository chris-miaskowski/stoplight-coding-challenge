import * as React from "react";
import { Provider } from 'react-redux';

import Paths from "../../containers/PathsBlocksCollection/connect";
import { Header } from "../Header/Header";
import configureStore from '../../store/configureStore';
import ApiKey from '../../containers/ApiKey/connect';

const styles = require("../../styles.css");

export const App = () => (
  <Provider store={configureStore()}>
    <div className={styles.app}>
      <Header />
      <div className="p-5">
        <ApiKey />
        <Paths />
      </div>
    </div>
  </Provider>
);

export default App;
