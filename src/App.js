
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ExpenseItem Date={'2022,12,1'}  Amount={200} Title={'toilerpaper'}/>
      <ExpenseItem Date={'2022,12,1'} Amount={20} Title={"toilerpaper"}/>
      <ExpenseItem Date={'2022,12,1'} Amount={20} Title={"toilerpaper"}/> 
      </header>
    </div>
  );
}

export default App;
