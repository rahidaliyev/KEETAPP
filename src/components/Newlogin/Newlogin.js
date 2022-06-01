import React from 'react'
import "../Newlogin/Newlogin.css"
import {Routes, Route, Link } from 'react-router-dom'
import Newregister from '../Newregister/Newregister'
import {BiHomeAlt} from 'react-icons/bi'

const style={
    marginTop: "-9px",
    fontSize: "8px"
}
const homestyle={
    fontSize: '4rem',
    float: 'right',
    margin: '20px 30px',
    color: 'purple'

}


export default function Newlogin() {
    
    return (
        <div className='body' >
            <Link to="/">
            <BiHomeAlt style={homestyle}/>

            </Link>

            <div className="login-box">

                <h3>Login</h3>
                <form>
                  <div style={{marginTop: '2rem'}}>
                    <input type="email" name="" placeholder="Enter your e-mail..." required />
                
                    <input type="password" name="" placeholder="Enter your password..." required />
                </div>
                    <input style={{marginTop: '2rem'}} type="submit" name="" value="Login" />
                   <Link style={style} to="/register">Sign up for Keet.app</Link>
                </form>
            </div>
    
    <Routes>
    <Route  path="/register" element={<Newregister />}/> 
    <Route path="/" element={<></>}> </Route>
    </Routes>
        </div>
    )
}
