import { useContext } from "react";
import { AuthContext } from "..";
import { Login } from "./Login";

export const Navbar = () =>{


    const [auth,hndlauth] = useContext(AuthContext)

    console.log(auth)


    return(

        <div style={{display : "flex",border: "1px solid black", margin: "0.5rem", padding : "1rem",justifyContent:"space-around"}}>
            <div>
                <Login/>
            </div>
            <button onClick={()=>{hndlauth(false)}} > logOut </button>
        </div>

    );


}