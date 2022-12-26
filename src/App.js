import './App.css';
import DemoColumn from './components/DemoColumn';
import DemoPie from './components/DemoPie';
import SameLevel from './components/SameLevel';
import Counter from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      {/* <DemoColumn />
      <DemoPie /> */}
      <Counter />
      <SameLevel />
    </div>
  );
}

export default App;
