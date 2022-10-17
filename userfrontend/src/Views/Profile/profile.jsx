import React from "react"
import UsersService from "../../Services/UsersService"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./profile.css"

const Profile = () => {
  const [user, setUser] = useState({})

  const { id } = useParams()

  const onChangehandle = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    UsersService.update(id, user).then(res => {
      //  localStorage.setItem('user')
      console.log(res)

    }).catch(err => {
      console.log(err)
    })

  }

  useEffect(() => {
    UsersService.get(id).then(res => {
      console.log(res)
      setUser(res.data.data)

    }).catch(err => {
      console.log(err)
    })

  }, [])
  return (
    <>
      {/* Start Contact */}
      <div className="arriere">
        <section id="contact-us" className="contact-us section">
          <div className="title">
            <h1 className="change" >Bienvenue dans votre profile
              <br /> "{user.nom} {user.prenom}"
            </h1>

          </div>

          <div className="container">
            <div className="contact-head">
              <div className="row">
                <div className="col-lg-4 col-12">
                  <div className="cadre">
                    <div className="single-head">
                      <div className="single-info">
                        <i className="fa fa-phone" />
                        <h4 className="title">Appelez-nous maintenant :</h4>
                        <ul>
                          <li>+216 98 260 060</li>
                          <li>+216 97 342 942</li>
                        </ul>
                      </div>
                      <div className="single-info">
                        <i className="fa fa-envelope-open" />
                        <h4 className="title">Email:</h4>
                        <ul>
                          <li><a href="mailto:chicwatch1@gmail.com">chicwatch1@gmail.com</a></li>
                          <li><a href="mailto:azizbna20@gmail.com">azizbna20@gmail.com</a></li>
                        </ul>
                      </div>
                      <div className="single-info">
                        <i className="fa fa-location-arrow" />
                        <h4 className="title">Notre adresse :</h4>
                        <ul>
                          <li>Rue Victor Hugo, Sousse</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-12">
                  <div className="bggg">
                    <div className="form-main">
                      <form className="form" onSubmit={onSubmit}>
                        <div className="row">

                          <div>
                            <div className="col-lg-6 col-12" >
                              <div className="form-group">
                                <label>Votre CIN</label>
                                <input name="CIN" type="text" value={user.CIN} onChange={onChangehandle} />
                              </div>
                            </div>
                            <div className="col-lg-6 col-12" >
                              <div className="form-group">
                                <label>Votre email</label>
                                <input name="email" type="email" value={user.email} onChange={onChangehandle} />
                              </div>
                            </div>
                            <div className="col-lg-6 col-12" >
                              <div className="form-group">
                                <label>Votre sexe</label>
                   
                                <input name="sexe" type="text" value={user.sexe} onChange={onChangehandle} />
                              </div>
                            </div>
                            <div className="col-lg-6 col-12" >
                              <div className="form-group">
                                <label>Votre nom</label>
                                <input name="nom" type="text" value={user.nom} onChange={onChangehandle} />
                              </div>
                            </div>

                            <div className="col-lg-6 col-12" >
                              <div className="form-group">
                                <label>Votre prenom</label>
                                <input name="prenom" type="text" value={user.prenom} onChange={onChangehandle} />
                              </div>
                            </div>
                            <div className="col-lg-6 col-12" >
                              <div className="form-group">
                                <label>Votre numéro de téléphone 1</label>
                                <input name="num_tel1" type="number" min="0" value={user.num_tel1} onChange={onChangehandle} />
                              </div>
                            </div>

                            <div className="col-lg-6 col-12" >
                              <div className="form-group">
                                <label>Votre numéro de téléphone 2</label>
                                <input name="num_tel2" type="number" min="0" value={user.num_tel2} onChange={onChangehandle} />
                              </div>
                            </div>

                            <div className="col-lg-6 col-12" >
                              <div className="form-group">
                                <label>Votre adresse </label>
                                <input name="adresse" type="text" value={user.adresse} onChange={onChangehandle} />
                              </div>
                            </div>

                            <div className="col-lg-6 col-12" >
                              <div className="form-group">
                                <label>Votre codepostal</label>
                                <input name="codepostal" type="text" value={user.codepostal} onChange={onChangehandle} />
                              </div>
                            </div>

                            <div className="col-12">
                              <div className="btnplace">
                                <div className="form-group button">
                                  <button type="submit" className="btn">Mise à jour</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*/ End Contact */}


      </div>
    </>
  )
}
export default Profile