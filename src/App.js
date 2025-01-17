import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import Header from './common/header/index'
import { GlobaStyle } from './style'
import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
    <div>
      <GlobaStyle />
      <Provider store={store}>
        {/* <Header /> */}
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
