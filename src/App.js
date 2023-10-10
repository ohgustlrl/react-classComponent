import { Component } from "react";
import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      exepnses : [
        { id: 1, charge: "렌트비", amount: 1600 },
        { id: 2, charge: "교통비", amount: 400 },
        { id: 3, charge: "식비", amount: 1200 }
      ]
    }
  } 

  handleDelete = (id) => {
    const newExpenses = this.state.exepnses.filter(expenses => expenses.id !== id)
    console.log(newExpenses)
    this.setState({ exepnses: newExpenses })
  }

  render() {
    return (
      <main className="main-container">
        <h1>예산 계산기</h1>

        <div style={{ width: '100%', backgroundColor: '#fff', padding: '1rem' }}>
          {/* 익스펜스 폼 */}
          <ExpenseForm/>
        </div>

        <div style={{ width: '100%', backgroundColor: '#fff', padding: '1rem' }}>
          {/* 익스펜스 리스트 */}
          <ExpenseList 
            initailExpenses = { this.state.exepnses } 
            handleDelete = { this.handleDelete }
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
          <p style={{ fontSize: '2rem'}}>
            총 지출 : 
            <span> 원</span>
          </p>
        </div>

      </main> 
    )  
  }
}

export default App;