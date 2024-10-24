import React from 'react'
import Index from "./routes";
import { Provider } from 'react-redux';
import store from './app/store';


const App = () => {

  return (
    <Provider store={store}>
      <Index />
    </Provider>
      
  )
}

export default App