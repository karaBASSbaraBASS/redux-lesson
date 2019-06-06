import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/index';
import WebPage from './components/webpage';



const App = () => {
  const store = createStore(allReducers);
  return (
    <Provider store={store}>
      <WebPage />

    </Provider>
  )
}

export default App;
