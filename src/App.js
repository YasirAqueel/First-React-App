import logo from './logo.svg';
import './App.css';
//import Greet from './components/Greet'
//import Welcome from './components/welcome'
//import Message from './components/message'
//import Counter from './components/counter'
//import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'

function App() {
  return (
    <div className="App">
      {
        //<Greet name="Bruce" heroName="Batman"><p>This is children</p></Greet>
      //<Greet name="Jack" heroName="Superman"><button>Click</button></Greet>
      //<Greet name="Diana" heroName="Wonder Woman"></Greet>
      //<Welcome name="Bruce" heroName="Batman"/>
      //<Welcome name="Jack" heroName="Superman"/>
      //<Welcome />
      //<Message message='Welcome Guest'/>
      //<Counter />
      //<FunctionClick />
      <ClassClick />
      }
      
    </div>
  );
}

export default App;