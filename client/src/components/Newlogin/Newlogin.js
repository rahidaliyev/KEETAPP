import React, { useState } from 'react'
import "../Newlogin/Newlogin.css"
import { Routes, Route, Link } from 'react-router-dom'
import Newregister from '../Newregister/Newregister'
import { BiHomeAlt } from 'react-icons/bi'
import { Axios } from 'axios'


const style = {
    marginTop: "-9px",
    fontSize: "8px"
}
const homestyle = {
    fontSize: '4rem',
    float: 'right',
    margin: '20px 30px',
    color: 'purple'

}


export default function Newlogin() {
    // const users = [];
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users,setUsers]=useState([

    ])
    
    const submitForm = () => {
     users= Axios.get('http://localhost:3001/api/get')
        console.log(users)
        const data = users.find((elem) => 
            elem.email == email && elem.password == password
        )
        if (data) {
            console.log("login oldun!")
        }
        else {
            console.log("gelen defe gel!")
}
      
    }


    return (
       
        <div className='body' >
       
            <Link to="/">
                <BiHomeAlt style={homestyle} />

            </Link>

            <div className="login-box">

                <h3>Login</h3>
                <form>
                    <div style={{ marginTop: '2rem' }}>
                        <input type="email" onChange={(e) => { setEmail(e.target.value) }} name="" placeholder="Enter your e-mail..." required />

                        <input type="password" onChange={(e) => { setPassword(e.target.value) }} name="" placeholder="Enter your password..." required />
                    </div>
                    <input  style={{ marginTop: '2rem' }} type="submit" onClick={submitForm} name="" value="Login" />
                    <Link style={style} to="/register">Sign up for Keet.app</Link>
                </form>
            </div>

            <Routes>
                <Route path="/register" element={<Newregister />} />
                {/* <Route path="/" element={<></>}> </Route> */}
            </Routes>
        </div>
    )
}
