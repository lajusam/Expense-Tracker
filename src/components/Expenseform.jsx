// src/components/ExpenseForm.jsx
import { useState } from "react";

export default function ExpenseForm({ addExpense }) {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!desc || !amount) return;
    addExpense({ id: Date.now(), desc, amount: parseFloat(amount) });
    setDesc("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}
