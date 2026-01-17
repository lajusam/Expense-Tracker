// import {useState,useEffect,useContext} from 'react'
import Authprovider from "./context/authcontext";
import Button from "./components/button";
import Header from "./components/header";


const App=()=>{

    return(
        <Authprovider>
            <Header/>
            <Button/>
        </Authprovider>
    )
}
export default App;