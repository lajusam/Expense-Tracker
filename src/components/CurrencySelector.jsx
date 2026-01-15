import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

export default function CurrencySelector(){
    const {currency,setCurrency}=useContext(CurrencyContext)

    return(
        <>
        <div>
            <label>Currency Selector:</label>
            <select value={currency} onChange={(e)=>setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="NPR">NPR</option>
        <option value="INR">INR</option>
            </select>
        </div>
        </>
    )

}