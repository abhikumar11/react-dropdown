import './App.css';
import Dropdown from './components/Dropdown';
import data from './DropdownData';
function App() {
  return (
    <div className="App">
      <Dropdown data={data}/>
    </div>
  );
}

export default App;
