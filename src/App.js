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
import Explanation from './components/functionalComponents/Explanation';
import LearnMore from './components/functionalComponents/LearnMore';
import Title from './components/functionalComponents/Title';
import Footer from './components/functionalComponents/footer';
import Register from './components/functionalComponents/register';
import Login from './components/functionalComponents/Login';
function App() {
  return (
    <div className="App">
      <Title />
      <BrowserRouter>
        <br></br>
        <br></br>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Explantion" element={<Explanation />}></Route>
          <Route path="/LearnMore" element={<LearnMore />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <br></br>
      <br></br>
      <img src="images.png" alt="" width={"40%"} />

      {/* <BrowserRouter>
         <footer />
        <Routes>
          <Route path="/https://legacy.reactjs.org/docs/getting-started.html" element={<Install />}></Route> 
          <Route path="/https://legacy.reactjs.org/docs/hello-world.html" element={<MainConcepts/>}></Route>
          <Route path="/https://legacy.reactjs.org/tutorial/tutorial.html" element={<Tutorial />}></Route>
          <Route path="https://opensource.facebook.com/legal/terms" element={<Terms/>}></Route>
          <Route path="https://opensource.facebook.com/legal/privacy" element={<Privacy/>}></Route> 
          <Route path="/https://github.com/INDHUPRIYA-D-80/" element={<Github/>}></Route>
          <Route path="='/https://www.linkedin.com/in/indhu-priya-63753724b"element={<LinkedIn/>}></Route>
        </Routes> 
      </BrowserRouter> */}

      {/* <PropsComponent name ="Indhu" course="MERN"/>  */}
      {/* <TestClassComp/> */}
      {/* <header className="App-header">
        {/* <TestComp/> */}

      {/* <StateComponent /> */}
      {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>*/}
      {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <Footer />

    </div>
  );
}

export default App;
