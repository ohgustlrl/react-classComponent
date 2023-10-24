import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList";
import "./App.css";
import Alert from "./components/Alert";

const App = () => {

  const [alert, setAlert] = useState({show : false, hide : 'hide'});

  const [charge, setCharge] = useState("");

  const [amount, setAmount] = useState();

  const [expenses, setExpenses ] = useState([
    { id: 1, charge: "렌트비", amount: 1600 },
    { id: 2, charge: "교통비", amount: 400 },
    { id: 3, charge: "식비", amount: 1200 }
  ])

  const handleDelete = (id) => {
    const newExpenses = expenses.filter(expenses => expenses.id !== id)
    setExpenses(newExpenses);
    handleAlert({ type : "danger", text : "아이템이 삭제되었습니다."})
  }

  const handleCharge = (e) => {
    setCharge(e.target.value)
  }

  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(charge !== "" && amount > 0) {
      const newExpense = {id: crypto.randomUUID(), charge, amount}

      //불변성을 위한 newExpenses 생성
      const newExpenses = [...expenses, newExpense]
      setExpenses(newExpenses)
      setCharge("")
      setAmount("")
      handleAlert({type : "success", text : "아이템이 생성되었습니다"})
    } else {
      console.log("erroe")
      handleAlert({type : "danger", text : "지출항목칸은 빈 값일 수 없으며 지출비용은 0 보다 커야 합니다."})
    }
  }

  const handleAlert = ({type, text}) => {
    setAlert({ show: true, type, text})
    setTimeout(() => {
      setAlert({show : false})
    }, 7000);
  }

  return (
    <main className="main-container">
      {alert.show ? <Alert type={alert.type} text={alert.text}/> : <Alert hide={alert.hide}/>}
      <h1>예산 계산기</h1>

      <div style={{ width: '100%', backgroundColor: '#fff', padding: '1rem' }}>
        {/* 익스펜스 폼 */}
        <ExpenseForm
          handleCharge = {handleCharge}
          charge = {charge}
          handleAmount = {handleAmount}
          amount = {amount}
          handleSubmit = {handleSubmit}
        />
      </div>

      <div style={{ width: '100%', backgroundColor: '#fff', padding: '1rem' }}>
        {/* 익스펜스 리스트 */}
        <ExpenseList 
          initailExpenses = { expenses } 
          handleDelete = { handleDelete }
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

export default App;