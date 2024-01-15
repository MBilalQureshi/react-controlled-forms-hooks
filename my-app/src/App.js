import './App.css';
import ControlledFormsHooks from "./components/ControlledFormsHooks";
import UseStatesWithArrays from './components/UseStatesWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';
import HooksCounter from './components/HooksCounter';

function App() {
  return (
    <div className='App'>
      {/* Add your components here, comment and uncommnet the required lectures below */}
      {/* lecture 1 hooks below */}
      {/* <ControlledFormsHooks /> */}
      {/* lecture 2 hooks below */}
      {/* <UseStatesWithArrays /> */}
      {/* lecture 3 hooks below */}
      <UseStateWithObjects />
      <HooksCounter />

    </div>
  );
}

export default App;