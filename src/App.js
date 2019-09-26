import React from 'react'
import { Provider } from 'react-redux'
import store from './store/index'
import Header from './common/header/index'
import { GlobaStyle } from './style'

function App() {
  return (
    <div>
      <GlobaStyle />
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;
