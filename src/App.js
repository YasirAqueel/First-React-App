import logo from './logo.svg';
import './App.css';
//import Greet from './components/Greet'
//import Welcome from './components/welcome'
//import Message from './components/message'
//import Counter from './components/counter'
//import FunctionClick from './components/FunctionClick'
//import ClassClick from './components/ClassClick'
//import EventBind from './components/EventBind'
//import UserGreeting from './components/UserGreeting'
//import NameList from './components/NameList'
//import Stylesheet from './components/Stylesheet'
//import Form from './components/Form'
//import LifecycleA from './components/LifecycleA'
//import ParentComp from './components/ParentComp'
//import RefDemo from './components/RefDemo'
//import FocusInput from './components/FocusInput'
//import PortalDemo from './components/PortalDemo'
//import ClickCounter from './components/ClickCounter'
//import HoverCounter from './components/HoverCounter'
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

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
      //<ClassClick />
      //<EventBind />
      //<UserGreeting />
      //<NameList />
      //<Stylesheet primary = {true}/>
      //<Form />
      //<LifecycleA />
      //<ParentComp />
      //<RefDemo />
      //<FocusInput />
      //<PortalDemo />

      //<ClickCounter />

      //<HoverCounter />

        <UserProvider value = "Yasir">
          <ComponentC />
        </UserProvider>

      }
      
    </div>
  );
}

export default App;
