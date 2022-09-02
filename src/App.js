import React from 'react';
import Home from './pages/Home';
import User from './pages/User';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import userReducer from './store/reducers/user';

const rootReducer = combineReducers({
  data: userReducer,
})

const store = configureStore(
  {
    reducer: rootReducer,
  });

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/users" element={<User />} />
          <Route exact path="/contacts" element={<Contact />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
