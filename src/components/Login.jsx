import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "..";

export const Login = () =>{

    const [email,setEmail] = useState("");

    const [pass,setPass] = useState("");

    const [auth,hndlauth] = useContext(AuthContext)

    const [data,setData] = useState([])

    console.log(auth)

    

    const getin = () => {

            axios({

            method: "post",

            url : "https://reqres.in/api/login",

            data : {
                
                "email": email,
                "password": pass
              }

            })
            .then((res)=>{
                setData(res.data)
                console.log(data)
            })
            .catch((e)=>{console.log(e)})


    }




    return(
        <div style={{display:"flex", flexDirection:"column", padding: "10px"}}>
            <input type="text" placeholder="enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
            <br/>
            <input type="text" placeholder="enter password" onChange={(e)=>{setPass(e.target.value)}} />
            <br/>
            <button onClick={()=>{
                
                hndlauth(true)

                
                getin()
                
                }}>login</button>
        </div>
    );

} 