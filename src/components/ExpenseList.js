import React from 'react'
import ExpenseItem from './ExpenseItem'
import "./ExpenseList.css"
import { MdDelete } from 'react-icons/md'

const ExpenseList = ({handleDelete, initailExpenses}) => {

  console.log(initailExpenses)
  
  return (
    <React.Fragment>
      <ul className='list'>
        {/* Expense Item */}
        {initailExpenses.map(expense => {
          return (
            <ExpenseItem 
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
            />
          )
        })}
      </ul>
      <button className='btn'>
        목록지우기
        <MdDelete className='btn-icon' />
      </button>
    </React.Fragment>
  )
}

export default ExpenseList