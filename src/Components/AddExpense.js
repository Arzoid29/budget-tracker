import React from 'react'
import { useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
export default function AddExpense() {
  const { dispatch } = useContext(AppContext)
  const [name, setName] = useState('')
  const [cost, setCost] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost)
    }
    dispatch({ type: 'ADD_EXPENSE', payload: expense })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm">
          <label for="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-sm">
          <label for="amount">Amount</label>
          <input
            required
            type="text"
            className="form-control"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            id="amount"
          ></input>
        </div>
        <div className="col-sm mt-4">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  )
}
