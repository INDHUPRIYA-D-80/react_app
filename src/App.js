import logo from './logo.svg';
import './App.css';
//import TestComp from './components/functionalComponents/testcomponents';
//import TestClassComp from './components/classComponents/testClassComponents';
import PropsComponent from './components/functionalComponents/PropsComponent';
function App() {
  return (
    <div className="App">
      {/* <TestClassComp/> */}
      <header className="App-header">
      {/* <TestComp/> */}
      <PropsComponent name ="Indhu" course="MERN" rollno="21ECR080"/>
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
