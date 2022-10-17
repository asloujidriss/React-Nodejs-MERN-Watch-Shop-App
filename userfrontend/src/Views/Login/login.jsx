import './login.css'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import LoginService from '../../Services/LoginService'

function Login() {
  const initialValues = {
    email: "",
    password: "",
  }

  const [formErrors, setFormErrors] = useState({})

  const [isSubmit, setIsSubmit] = useState(false)

  const [data, setData] = useState({ initialValues })
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  const [error, setError] = useState("")

  console.log(data)
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(data));
    setIsSubmit(true)
    LoginService.create(data)
      .then(res => {
        console.log(res)
        window.location = "/"
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem('user', JSON.stringify(res.data.data));
        localStorage.setItem('userId', JSON.stringify(res.data.data._id));

      }).catch(error => {
        console.log(error)
        if (error.response && error.response.status >= 400 && error.response.status <= 500) {
          setError(error.response.data.message)
        }
      })
  }

  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(data)
    }
  }, [formErrors]
  )

  const validate = (values) => {
    const errors = {}

    if (!values.email) {
      errors.email = "Email est requis!"
    }

    if (!values.password) {
      errors.password = "Le mot de passe est requis !"
    } else if (values.password.length < 4) {
      errors.password = "le mot de passe doit comporter plus de 4 caractères"
    }
    else if (values.password.length > 14) {
      errors.password = "le mot de passe doit comporter moins de 14 caractères"
    }

    return errors;
  }

  return (
    <>

      <div className="login-area login-bg">
        <div className="container">
          <div className="login-box ptb--100">
            <form onSubmit={handleSubmit} >
              <div className="login-form-head">
                <Link to="/"> <div className='symbole'>
                  <div className='fa fa-home fa-3x'></div>
                </div>
                </Link>
                <h4>Se connecter</h4>
                <p><strong>Bienvenue à tous, connectez-vous</strong></p>
              </div>
              <div className="login-form-body">

                <div className="form-gp">
                  <label htmlFor="exampleInputEmail1"></label>
                  <input type="email" name='email' placeholder="E-mail" id="exampleInputEmail1"
                    value={data.email} onChange={handleChange} />
                  <i className="ti-email" />
                  {error && <div> {error} </div>}
                  <div className="text-danger" />
                  <p className='errorrequired'>{formErrors.email}</p>
                </div>

                <div className="form-gp">
                  <label htmlFor="exampleInputPassword1"></label>
                  <input type={passwordShown ? "text" : "password"} name='password' placeholder="mot de passe" id="exampleInputPassword1"
                    value={data.password} onChange={handleChange} />
                  <i onClick={togglePassword} className="ti-eye" />
                  <div className="text-danger" />
                  <p className='errorrequired'>{formErrors.password}</p>
                </div>


                {/* <div className="row mb-4 rmber-area">
            <div className="col-6">
              <div className="custom-control custom-checkbox mr-sm-2">
                <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                <label className="custom-control-label" htmlFor="customControlAutosizing">Remember Me</label>
              </div>
            </div>
            <div className="col-6 text-right">
              <a href="#">Forgot Password?</a>
            </div>
          </div> */}

                <div className="submit-btn-area">
                  <button id="form_submit" type="submit">Se connecter</button>
                </div>
                <div className="form-footer text-center mt-4">
                  Vous n'avez pas de compte ?<Link to="/Register"> S'inscrire </Link>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>

    </>


  )
}
export default Login