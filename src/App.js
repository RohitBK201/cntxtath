import { useContext } from 'react';
import { AuthContext } from '.';
import './App.css';
import { Navbar } from './components/navbar';

function App() {

  const [auth] = useContext(AuthContext)

  

  return (
    <div className="App">
      <Navbar/>

      <div>{auth? "Login Sucessfully" : ""}</div>

    </div>
  );
}

export default App;
