import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const AuthContext = createContext();

function AuthContextProvider ({children}){

  const [auth,setAuth] = useState(false)

  const hndlauth =(state) => { setAuth(state)}


  return (

    <AuthContext.Provider value={[auth,hndlauth]}>     
      {children}
    </AuthContext.Provider>

  ); 


}



root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
