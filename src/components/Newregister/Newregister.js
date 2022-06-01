import React from 'react'
import '../Newregister/Newregister.css'
import { Link } from 'react-router-dom'
import {BiHomeAlt} from 'react-icons/bi'
export default function Newregister() {
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

  return (
    <div>
 <Link to="/">
            <BiHomeAlt style={homestyle}/>

            </Link>
<div className="login-box">

  <h3>Register</h3>
  <form>
  
    <input type="email" name="" placeholder="Enter your e-mail..." required/>
   
    <input type="password" name="" placeholder="Enter password..." required/>
    <input type="password" name="" placeholder="Repeat password again..." required/>

    <input type="submit" name="" value="Sign up"/>
  
    <Link to='/login' style={style}>Already have an account?<span> </span></Link>
  </form>
</div>


    </div>
  )
}
