// vendor imports
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
