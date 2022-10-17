import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginService from '../../Services/LoginService'
import "./login.css"


const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState("")
  console.log(data)
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    LoginService.create(data)
      .then(res => {
        console.log(res)
        window.location = "/"
        localStorage.setItem("isAuthenticated","true");
      }).catch(error => {
        console.log(error)
        if (error.response && error.response.status >= 400 && error.response.status <= 500) {
          setError(error.response.data.message)
        }
      })
  }

  return (
    <div class="login-container">
      <div class="login-box animated fadeInDown">
        <div class="login-logo"></div>
        <div class="login-body">
          <div class="title-login"><strong>Se connecter</strong></div>
          <form class="form-horizontal" onSubmit={handleSubmit} >

            <div class="form-group">
            <div className="col-md-12">
          <input type="email" className="form-control" placeholder="E-mail" required  name="email" value={data.email} onChange={handleChange}/>
        </div>
            </div>
            <div className="form-group">
        <div className="col-md-12">
          <input type="password" className="form-control" placeholder="Mot de passe" required name="password" value={data.password} onChange={handleChange}/>
          { error && <div class="invalid-feedback">{error}</div>}
        </div>
      </div>
            <div class="form-group">
            <div className='posit'>
                <button class="btn btn-info btn-block">Se connecter</button>
              </div>
            </div>
            <div class="login-subtitle" >
              Vous n'avez pas encore de compte? <Link to ="/register"> Créez un compte 
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Login
