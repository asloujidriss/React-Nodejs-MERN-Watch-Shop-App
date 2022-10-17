import './register.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import UsersService from '../../Services/UsersService'
// import { validator } from 'validator'



function Register() {
    const initialValues = {
        CIN: "",
        email: "",
        password: "",
        nom: "",
        prenom: "",
        sexe: "",
        num_tel1: "",
        num_tel2: "",
        adresse: "",
        codepostal: "",
        date_creation_compte: "",
    }

    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const [data, setData] = useState({ initialValues })
    const navigate = useNavigate()
    const [errors, setError] = useState("")

    const OnChangehandle = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(data));
        setIsSubmit(true)
        UsersService.create(data)
            .then(res => {
                console.log(res)
                window.location = "/"
                localStorage.setItem("isAuthenticated", "true");
                localStorage.setItem('user', JSON.stringify(res.data.data));
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
        // const regex = /^ [^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; 

        if (!values.CIN) {

            errors.CIN = "CIN est requis!"

        }

        if (!values.email) {

            errors.email = "Email est requis!"
        }
        // else if (validator.isEmail(email)) {
        //     setEmailError('Valid Email :)')
        //   } else {
        //     setEmailError('Enter valid Email!')
        //   }

        // else if (!regex.test(values.email)) 
        // {
        //     errors.email = "This is not a valid email format!"

        // }

        if (!values.password) {
            errors.password = "Le mot de passe est requis !"
        } else if (values.password.length < 4) {
            errors.password = "le mot de passe doit comporter plus de 4 caractères"
        }
        else if (values.password.length > 10) {
            errors.password = "le mot de passe doit comporter moins de 10 caractères"
        }

        if (!values.nom) {

            errors.nom = "Nom est requis!"

        }

        if (!values.prenom) {

            errors.prenom = "Prenom est requis!"

        }

        if (!values.sexe) {

            errors.sexe = "Sexe est requis!"

        }

        if (!values.num_tel1) {

            errors.num_tel1 = "Num_tel1 est requis!"

        }

        if (!values.num_tel2) {

            errors.num_tel2 = "num_tel2 est requis!"

        }

        if (!values.adresse) {

            errors.adresse = "Adresse est requis!"

        }

        if (!values.codepostal) {

            errors.codepostal = "Codepostal est requis!"

        }

        if (!values.date_creation_compte) {

            errors.date_creation_compte = "Date_creation_compte est requis!"

        }
        return errors;
    }

    return (
        <>

            <div className="login-area login-bg">
                <div className="container">
                    <div className="login-box ptb--100">
                        <form onSubmit={handleSubmit}>
                            <div className="login-form-head">
                                <Link to="/"> <div className='symbole'>
                                    <div className='fa fa-home fa-2x'></div>
                                </div>
                                </Link>
                                <h4>S'inscrire</h4>
                                <p><strong>Inscrivez-vous ET Profitez du site</strong></p>
                            </div>

                            <div className="login-form-body" >

                                <div className="form-gp">

                                    <input type="number" name='CIN' placeholder="CIN" min="0"
                                        value={data.CIN} onChange={OnChangehandle} />
                                    <i class="fa fa-address-card"></i>
                                    <div className="text-danger" />
                                    <p className='errorrequired'>{formErrors.CIN}</p>
                                </div>


                                <div className="form-gp">
                                    <label htmlFor="exampleInputEmail1"></label>
                                    <input type="email" name='email' placeholder="E-mail" id="exampleInputEmail1"
                                        value={data.email} onChange={OnChangehandle} />
                                    <i className="ti-email" />
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


                                <div className="form-gp">
                                    <input type="text" name='nom' placeholder="Nom"
                                        value={data.nom} onChange={OnChangehandle} />
                                    <div className="text-danger" />
                                    <p className='errorrequired'>{formErrors.nom}</p>
                                </div>


                                <div className="form-gp">
                                    <input type="text" name='prenom' placeholder="Prénom"
                                        value={data.prenom} onChange={OnChangehandle} />
                                    <div className="text-danger" />
                                    <p className='errorrequired'>{formErrors.prenom}</p>
                                </div>


                                <div className="form-gp">
                                    <input type="text" name='sexe' placeholder="sexe"
                                        value={data.sexe} onChange={OnChangehandle} />
                                    <div className="text-danger" />
                                    <p className='errorrequired'>{formErrors.sexe}</p>
                                </div>


                                <div className="form-gp">
                                    <input type="number" name='num_tel1' placeholder="Tel1" min="0"
                                        value={data.num_tel1} onChange={OnChangehandle} />
                                    <i class="fa fa-phone"></i>
                                    <div className="text-danger" />
                                    <p className='errorrequired'>{formErrors.num_tel1}</p>
                                </div>


                                <div className="form-gp">
                                    <input type="number" name='num_tel2' placeholder="Tel2" min="0"
                                        value={data.num_tel2} onChange={OnChangehandle} />
                                    <i class="fa fa-phone"></i>

                                    <div className="text-danger" />
                                    <p className='errorrequired'>{formErrors.num_tel2}</p>
                                </div>


                                <div className="form-gp">
                                    <input type="text" name='adresse' placeholder="Adresse"
                                        value={data.adresse} onChange={OnChangehandle} />
                                    <i className="ti-home" />
                                    <div className="text-danger" />
                                    <p className='errorrequired'>{formErrors.adresse}</p>
                                </div>


                                <div className="form-gp">
                                    <input type="text" name='codepostal' placeholder="Code postal"
                                        value={data.codepostal} onChange={OnChangehandle} />
                                    <i class="fa fa-location-check"></i>
                                    <div className="text-danger" />
                                    <p className='errorrequired'>{formErrors.codepostal}</p>
                                </div>

                                <div className="form-gp">
                                    <input type="datetime-local" name='date_creation_compte'
                                        value={data.date_creation_compte} onChange={OnChangehandle} />
                                    <div className="text-danger" />
                                    <p className='errorrequired'>{formErrors.date_creation_compte}</p>
                                </div>


                                <div className="row mb-4 rmber-area">
                                    <div className="col-6">
                                    </div>
                                </div>
                                <div className="submit-btn-area" >
                                    <button id="form_submit" type="submit">Envoyer</button>
                                </div>

                                <div className="submit-btn-area">
                                    <Link to="/login"> <button className="submit-btn-area" id="signUp" > Revenir au page "Se connecter"</button></Link>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* <div id="ccReq" uib-alert="" ng-class="'alert-danger'" type="danger" alert-for="cardNumber" translate="" 
            class="ng-isolate-scope alert alert-danger" role="alert" aria-hidden="true">Card Number is required.</div>
            */}
        </>


    )
}

export default Register
