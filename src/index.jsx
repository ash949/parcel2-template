import React from 'react';
import ReactDOM from 'react-dom';
import { MainView } from './components/main-view/main-view';

import './index.scss';

class MyFlixApplication extends React.Component {
  render() {
    return (
      <MainView />
    );
  }
}

// Finds the root of your app
const container = document.getElementById('app-container');

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);