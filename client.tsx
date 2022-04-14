import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { RecoilRoot } from 'recoil';

import App from './layouts/App';
import { Global } from '@emotion/react';
import { reset } from '@utils/reset';

axios.defaults.withCredentials = true;
axios.defaults.baseURL =
  process.env.NODE_ENV === 'production' ? 'https://sleact.nodebird.com' : 'http://localhost:3090';

render(
  <BrowserRouter>
    <RecoilRoot>
      <Global styles={reset} />
      <App />
    </RecoilRoot>
  </BrowserRouter>,
  document.querySelector('#app'),
);
