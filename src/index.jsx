import React from 'react';
import { render } from 'react-dom';

// Import our SASS file
import './styles/main.scss';

import App from './components/App';

render(
  <App />,
  document.getElementById('app')
);