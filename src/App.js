import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Admin from './components/Admin'

function App() {
  return (
    <BrowserRouter>
      <header>
        <ul>
          <li>
            <Link to="/"> Login </Link>
          </li>
          <li>
            <Link to="/signup"> Signup </Link>
          </li>
          <li>
            <Link to="/admin"> Admin </Link>
          </li>
        </ul>
      </header>


      <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/signup" exact element={<Signup />}></Route>
        <Route path="/admin" exact element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
