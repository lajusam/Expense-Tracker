// src/App.jsx
import { useState, useEffect } from "react";
import { CurrencyProvider } from "./context/CurrencyContext";
import CurrencySelector from "./components/CurrencySelector";
import ExpenseForm from "./components/Expenseform";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal";

export default function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => setExpenses([...expenses, expense]);
  const deleteExpense = (id) => setExpenses(expenses.filter((e) => e.id !== id));

  return (
    <CurrencyProvider>
      <div style={{ padding: "20px" }}>
        <h1>Expense Tracker</h1>
        <CurrencySelector />
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
        <ExpenseTotal expenses={expenses} />
      </div>
    </CurrencyProvider>
  );
}
