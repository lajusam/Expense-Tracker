// src/components/ExpenseList.jsx
import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

export default function ExpenseList({ expenses, deleteExpense }) {
  const { currency } = useContext(CurrencyContext);

  return (
    <ul>
      {expenses.map((exp) => (
        <li key={exp.id}>
          {exp.desc} - {exp.amount.toFixed(2)} {currency}{" "}
          <button onClick={() => deleteExpense(exp.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
