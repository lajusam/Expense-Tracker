import { createContext,useState,useEffect } from "react";

export const CurrencyContext=createContext();

export function CurrencyProvider({children}){
    const [currency,setCurrency]=useState("USD");

    useEffect(()=>{
        const saveCurrency=localStorage.getItem("currency");
        if(saveCurrency) 
            setCurrency(saveCurrency);
    },[])

    useEffect(()=>{
        localStorage.setItem("currency",currency)
    },[currency])

    return(
        <CurrencyContext.Provider value={{currency,setCurrency}}>
            {children}
        </CurrencyContext.Provider>
    )
}

