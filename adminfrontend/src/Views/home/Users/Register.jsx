import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UsersService from "../../../Services/UsersService"



function Register() {
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const OnChangehandle = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        UsersService.create(data)
            .then(res => {
                console.log(res)
                window.location = "/"
            }).catch(error => {
                console.log(error)
                if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                    setError(error.response.data.message)
                }
            })
    }
    
    return (
        <div>
            <div className="login-container">
                <div className='register'>
                    <div className="login-box animated fadeInDown">
                        <div className="login-body">
                            <div className="login-title">
                            <strong>Inscrivez_vous, s'il vous plaît</strong></div>
                            <form className="form-horizontal" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <input type="number" className="form-control" required name='CIN' placeholder="CIN" min="0" value={data.CIN} onChange={OnChangehandle} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-md-12">
                                        <input type="email" className="form-control" required name='email' placeholder="E-mail" value={data.email} onChange={OnChangehandle} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <input type="password" className="form-control" required name='password' placeholder="Mot de passe" value={data.password} onChange={OnChangehandle} />
                                        {error && <div class="invalid-feedback">{error}</div>}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" required name='nom' placeholder="Nom" value={data.nom} onChange={OnChangehandle} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" required name='prenom' placeholder="Prénom" value={data.prenom} onChange={OnChangehandle} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" required name='sexe' placeholder="sexe" value={data.sexe} onChange={OnChangehandle} />
                                    </div>
                                </div>        
                                                <div className="form-group">
                                                    <div className="col-md-12">
                                                        <input type="number" className="form-control" required name='num_tel1' placeholder="Tel1" value={data.num_tel1} onChange={OnChangehandle} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-md-12">
                                                        <input type="number" className="form-control" required name='num_tel2' placeholder="Tel2" value={data.num_tel2} onChange={OnChangehandle} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-md-12">
                                                        <input type="text" className="form-control" required name='adresse' placeholder="Adresse" value={data.adresse} onChange={OnChangehandle} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-md-12">
                                                        <input type="text" className="form-control" required name='codepostal' placeholder="Code postal" value={data.codepostal} onChange={OnChangehandle} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-md-12">
                                                        <input type="datetime-local" className="form-control" required name='date_creation_compte' value={data.date_creation_compte} onChange={OnChangehandle} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-md-6">
                                                        <button className="btn btn-info btn-block" type='submit'>S'inscrire</button>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <Link to="/login"> <button className="btn btn-info btn-block" id="signUp" >Se connecter</button></Link>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    )
}
export default Register