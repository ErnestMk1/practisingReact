import React from 'react';
import st from './App.module.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import MessagesContainer from './components/Messages/MessagesContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className={st.mainDiv}>
        <Header />
        <NavBar />
        <div className={st.contentDiv}>
          <Routes>
            <Route
              path='profile'
              element={<ProfileContainer />}
            />
            <Route
              path='users'
              element={<UsersContainer />}
            />
            <Route
              path='messages'
              element={<MessagesContainer />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
