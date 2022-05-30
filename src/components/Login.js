import React from 'react'
// import '../css/libro.css'
// import '../css/new-card.css'
// import '../images/logoofweb.png'


export default function Register() {
  return (
    <div className="login-form-container">
    <div id="close-login-btn" className="fas fa-times"></div>
    <form action="#">
        <h3>daxil olun</h3>
        <span className="d-block">istifadəçi adı</span>
        <input type="email" className="box d-block" placeholder="email daxil edin" id=""></input>
        <span>şifrə</span>
        <input type="password" className="box d-block" placeholder="şifrənizi daxil edin" id=""/>
        <div className="checkbox">
            <input type="checkbox" id="remember-me"/>
            <label htmlFor="remember-me">məni xatırla</label>
        </div>
        <input type="submit" value="Daxil ol" className="login-btn" />
        <p>Şifrəni unutmusan ? <a href="#">Bura basın</a></p>
        <p>hesabınız yoxdur ? <a href="#">Bura basın</a></p>
    </form>
</div>
  )
}
