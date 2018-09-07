import * as React from "react";
import { Provider } from "react-redux";

import Authentication from "../../containers/Authentication/connect";
import Paths from "../../containers/PathsBlocksCollection/connect";
import Scheme from "../../containers/Scheme/connect";
import configureStore from "../../store/configureStore";
import { Header } from "../Header/Header";

const styles = require("../../styles.css");

export const App = () => (
  <Provider store={configureStore()}>
    <div className={styles.app}>
      <Header />
      <div className="p-5">
        <section className="card mb-5">
          <div className="card-body">
            <h2>Authentication</h2>
            <Authentication />
          </div>
          <div className="card-body">
            <h2>Scheme</h2>
            <Scheme />
          </div>
        </section>
        <Paths />
      </div>
    </div>
  </Provider>
);

export default App;
