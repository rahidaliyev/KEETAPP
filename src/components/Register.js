import React from 'react'
// import '../css/libro.css'
// import '../css/new-card.css'
// import '../images/logoofweb.png'



export default function Register() {
    return (
        <div>
            <div className="register-form-container">
                <div id="close-register-btn" className="fas fa-times"></div>
                <form>
                    <h3>Qeydiyyat</h3>
                    <span className="d-block">İstifadəçi adı</span>
                    <input type="email" className="box d-block" placeholder="email daxil edin" id="" />
                    <span>Şifrə</span>
                    <input type="password" className="box d-block" placeholder="şifrənizi daxil edin" id="" />
                    <span>Şifrə Təkrar</span>
                    <input type="password" className="box d-block" placeholder="yenidən daxil edin " id="" />
                    <input type="submit" value="Qeydiyyat" className="login-btn" />
                </form>
            </div>
            <div className="password-form-container">
                <div id="close-password-btn" className="fas fa-times"></div>
                <form>
                    <h3>şifrəni qaytar</h3>
                    <span className="d-block">istifadəçi adı</span>
                    <input type="email" className="box d-block" placeholder="email daxil edin" id="" />
                    <input type="submit" value="Göndər" className="login-btn" />
                </form>
            </div>
        </div>
    )
}
