import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter, Route, Routes
} from "react-router-dom";
// import Mail from './Mail';
import Email from './Email';
import Mail from './Mail';

import SendEmail from './SendEmail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, logout, selectUSer } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
// import firebase from 'firebase/compat/app';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user =useSelector(selectUSer)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) {
        dispatch(login({
          displayName: user.displayName,
                email: user.email,
                photoUrl:user.photoURL
        }))
      } else{
        dispatch(logout())

      }
    })

  }, [])
  

  return (
    <BrowserRouter>
    {
      !user ? <Login/>:
      (

        
        <div className="app">
      <Header/>
        <div className='app_body'>
          <Sidebar/>
          <Routes>
            <Route path='/mail' element={<Mail/>}/>
            <Route path='/' element={<Email/>}/>
          </Routes>
        </div>
        {sendMessageIsOpen && <SendEmail />}
    </div>
    )
  }
    </BrowserRouter>
    
  );
}

export default App;
