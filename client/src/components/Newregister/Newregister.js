import React, { useState } from 'react'
import Axios from 'axios'
import '../Newregister/Newregister.css'
import { Link } from 'react-router-dom'
import { BiHomeAlt } from 'react-icons/bi'


export default function Newregister() {
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isError, setisError] = useState("");
  const submitForm = () => {
    Axios.post('http://localhost:3001/api/insert', {
      email: email,
      password: password
    }).then(() => {
      alert("Successfully Register!");
    })
  }

  const checkValidation = (e) => {
    setConfirmPassword(e.target.value);
    if (password != confirmPassword) {
      setisError("Passwords must be same!")
      console.log(isError);
    }
    else {
      setisError(" ");
    }


  }



  return (

    <div>
      <Link to="/">
        <BiHomeAlt style={homestyle} />

      </Link>
      <div className="login-box">

        <h3>Register</h3>
        <form>

          <input type="email"
            onChange={(e) => { setEmail(e.target.value) }}
            name="" placeholder="Enter your e-mail..." required />

          <input type="password"
            onChange={(e) => { setPassword(e.target.value) }}
            name="" placeholder="Enter password..." required />
          
          <input type="password"
            value={confirmPassword}
            onChange={(e) =>  checkValidation(e) }
            name="confirmpassword"
            placeholder="Repeat password again..." required />

          <div style={{ color: 'red', marginTop: '-17px' }} >{isError}</div>

          <input type="submit" onClick={submitForm} name="" value="Sign up" />

          <Link to='/login' style={style}>Already have an account?<span> </span></Link>
        </form>
      </div>


    </div>
  )
}
