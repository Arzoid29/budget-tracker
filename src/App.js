import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Budget from './Components/Budget'
import Remaining from './Components/Remaining'
import ExpenseTotal from './Components/ExpenseTotal'
import ExpenseList from './Components/ExpenseList'
import AddExpense from './Components/AddExpense'
import { AppProvider } from './context/AppContext'
export default function App() {
  return (
    <AppProvider>
      {' '}
      <div className="container">
        <h1 className="mt-3">My budget planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget></Budget>
          </div>
          <div className="col-sm">
            <Remaining></Remaining>
          </div>
          <div className="col-sm">
            <ExpenseTotal></ExpenseTotal>
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList></ExpenseList>
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="mt3 ">
          <div className="row">
            <AddExpense></AddExpense>
          </div>
        </div>
      </div>
    </AppProvider>
  )
}
