import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expense/Expenses';


const expenses = [
  { id: 1, title: 'Car Insurance', date: new Date(2020, 2, 30) },
  { id: 2, title: 'Bike Insurance', date: new Date(2020, 8, 23) },
  { id: 3, title: 'Health Insurance', date: new Date(2021, 4, 18) },
  { id: 4, title: 'General Insurance', date: new Date(2021, 7, 9) }
]

function App() {

  const [newExpenseList, updateExpenseList] = useState(expenses);

  const addExpenseHandler = expense => {
    // console.log("in APP", expense);
    expense.id = newExpenseList.length + 1;
    updateExpenseList((previousExpensesList) => {
      return [expense, ...previousExpensesList]
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={newExpenseList} />
      </header>
    </div>
  );
}

export default App;
