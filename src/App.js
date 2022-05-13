
import './App.css';
import ExpenseItem from './components/ExpenseItem';
//import Hook  from './components/Hook';
import NewExpense from './components/NewExpense/NewExpense'



function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
      <NewExpense/> 
      
      
      <ExpenseItem 
      title = {expenses[0].title}
      amount = {expenses[0].amount}
      date = {expenses[0].date}
      />
      <ExpenseItem 
      title = {expenses[1].title}
      amount = {expenses[1].amount}
      date = {expenses[1].date}
      />
      <ExpenseItem 
      title = {expenses[2].title}
      amount = {expenses[2].amount}
      date = {expenses[2].date}
      />
    
      
      </header>
    </div>
  );
}

export default App;
