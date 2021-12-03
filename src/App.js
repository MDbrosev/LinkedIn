import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from "./features/User/userSlice";
import Header from "./features/Header/Header";
import Sidebar from './features/Sidebar/Sidebar';
import Feed from './features/Feed/Feed';
import Login from './features/Auth/Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      {/* if there is no user render login page, else render app */}
      {!user ? <Login /> :(
        <div className = "app_body">
          <Sidebar />
          <Feed />
          {/* Widgets */}        
        </div>        
      )}
    </div>
  );
}

export default App;
