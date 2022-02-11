import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
export default function Remaining() {

  const { expenses, budget } = useContext(AppContext)

  const totalEx = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0)
  const alertType = totalEx > budget ? 'alert-danger' : 'alert-success'
  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining:${budget - totalEx}</span>
    </div>
  )
}
