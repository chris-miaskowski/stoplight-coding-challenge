import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { validate } from 'swagger-parser';

import App from './components/App/App';

require('./styles/index.css');

const mount = (RootApp: any) => {
    chrome.storage.local.get('spec', async ({ spec }) => {
        try {
            const { api } = await validate(spec);
            ReactDOM.render(
              <App api={api}/>,
              document.getElementById('root'),
            );
        } catch (error) {
            console.error(error);
            // TODO: add a nice UI warning
        }
    });
};

mount(App);
