import React,{useContext} from 'react'

import { AppContext } from '../context/AppContext'


export default function ExpenseTotal() {
  const {expenses} = useContext(AppContext)

  const totalEx = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0)
  return (
    <div className="alert alert-primary">
      <span>Expense Total:${totalEx}</span>
    </div>
  )
}
