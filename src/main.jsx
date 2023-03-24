// this file is the alternate of index.js in react
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
////imports of redux toolkit stores and all////
import {store} from "./store/store"
import {Provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  // whenever we are getting any response it came two times because react.strictmode will check whether both of the response are same or not.
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  // provider take one parameter(props) which is store
  // now by using provider we had connected our react app to redux with store in it
  // Working : slice----> store----> main
  <Provider store={store}> 
  <App/>
  </Provider>
)
