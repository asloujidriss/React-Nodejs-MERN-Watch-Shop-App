import React, { useEffect, useState } from 'react'
import ServiceRepService from '../../Services/ServiceRepService'

const Getmyser = () => {
    const [serviceRep, setService] = useState([])
    const id = JSON.parse(localStorage.getItem("userId"))
    console.log(id)
    console.log()
    const Getmyser = () => {
      ServiceRepService.getmyser(id).then(res => {
        console.log("response >>>>", res)
        setService(res.data.data)
      }).catch(err => {
        console.log(err)
      })
  
    }
  
    useEffect(() => {
      Getmyser()
    }, [])
  
  
      return(
      <>
  
      {/* Start Contact */}
      <section id="contact-us" className="contact-us section">
        <div className="container">
          <div className="contact-head">
            <div className="row">
              <div className="col-lg-8 col-12">
                <div className="form-main">
                  <div className="title">
                    <h3>Les informations de votre montre(s)</h3>
                  </div>
                  <form className="form" method="post" action="mail/mail.php">
                    <div className="row">
                    {serviceRep.map((item, index) => {
                      return(
                     <div>
    <div classname="col-lg-6 col-12" key={index}>
      <div classname="form-group">
        <label><strong> num_rep: </strong> {item.num_rep}</label>
      </div>
    </div>
    <div classname="col-lg-6 col-12">
      <div classname="form-group">
        <label><strong> marque: </strong> {item.marque}</label>
      </div>
    </div>
    <div classname="col-lg-6 col-12">
      <div classname="form-group">
        <label><strong> panne: </strong> {item.panne}</label>
      </div>	
    </div>
    <div classname="col-lg-6 col-12">
      <div classname="form-group">
        <label> <strong> image: </strong> {item.image && (
                            <img className="default-img" style={{ height: "180px" }} src={'http://localhost:5010/getImage/' + item.image}
                         />
                          )}
                          </label>
      </div>	
    </div>
    <div classname="col-lg-6 col-12">
      <div classname="form-group">
        <label> <strong> user: </strong> {item.user.nom} {item.user.prenom}</label>
      </div>
    </div>
    <div classname="col-lg-6 col-12">
      <div classname="form-group">
        <label><strong> num_tel: </strong> {item.num_tel}</label>
      </div>
    </div>
    <div classname="col-lg-6 col-12">
      <div classname="form-group">
        <label><strong> date_estim: </strong> {item.date_estim}</label>
      </div>
    </div>
    <div classname="col-lg-6 col-12">
      <div classname="form-group">
        <label><strong> état: </strong> {item.etat}</label>
      </div>
    </div>
  </div>
  
                                        )
                                      })
                                    }
                    </div>
  
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-12">
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
          </div>
        </div>
      </section>
      {/*/ End Contact */}
      
      </>
      )
}

export default Getmyser