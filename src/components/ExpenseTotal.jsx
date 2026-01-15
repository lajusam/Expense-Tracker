
import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

export default function ExpenseTotal({ expenses }) {
  const { currency } = useContext(CurrencyContext);
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return <h3>Total: {total.toFixed(2)} {currency}</h3>;
}
