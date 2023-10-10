import React, { Component } from 'react'
import ExpenseItem from './ExpenseItem'
import "./ExpenseList.css"
import { MdDelete } from 'react-icons/md'

export class ExpenseList extends Component {
  render() {

    console.log(this.props.initailExpenses)
    
    return (
      <React.Fragment>
        <ul className='list'>
          {/* Expense Item */}
          {this.props.initailExpenses.map(expense => {
            return (
              <ExpenseItem 
                key={expense.id}
                expense={expense}
                handleDelete={this.props.handleDelete}
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
}

export default ExpenseList