import logo from './logo.svg';
import './App.css';
//import TestComp from './components/functionalComponents/testcomponents';
//import TestClassComp from './components/classComponents/testClassComponents';
//import PropsComponent from './components/functionalComponents/PropsComponent';
//import StateComponent from './components/classComponents/StateComponent';
import Navbar from './components/functionalComponents/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/functionalComponents/Home';
import About from '../src/components/functionalComponents/About';
import Experience from '../src/components/functionalComponents/Experience';
import Login from './components/functionalComponents/Login';



function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        {/* <Route path="/" element={<Home/>}></Route> */}
        <Route path="/Home" element={<Home />}></Route> 
        <Route path="/About" element={<About />}></Route> 
        <Route path="/Experience" element={<Experience />}></Route> 
          <Route path="/Login" element={<Login />}></Route> 
        </Routes>
      </BrowserRouter>

      {/* <PropsComponent name ="Indhu" course="MERN"/>  */}
      {/* <TestClassComp/> */}
      {/* <header className="App-header">
        {/* <TestComp/> */}

        {/* <StateComponent /> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */} 
    </div>
  );
}

export default App;
