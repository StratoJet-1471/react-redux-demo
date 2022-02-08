import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mainReducer from './react-redux-store/reducers.js';

import ShipContainer from './ShipContainer.jsx';

const store = createStore(mainReducer);

function App() {
  return (
    <Provider store={store}>
      <ShipContainer/>
    </Provider>
  );
}

export default App;
