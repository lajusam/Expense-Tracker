import {useState,createContext} from 'react';

const Authcontext=createContext();

const Authprovider=({children})=>{
        const [islogin,setislogin]=useState(false);

        const login=()=>setislogin(true);
        const logout=()=>setislogin(false);

    return(
        <>
        <Authcontext.Provider value={{islogin,login,logout}}>
        {children}
        </Authcontext.Provider>
        </>
    )
}
export default Authprovider;
export { Authcontext };