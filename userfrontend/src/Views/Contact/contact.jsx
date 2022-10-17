import React from "react" 
import "./contact.css"
export default ()=>{
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
                  <h4>Entrer en contact</h4>
                  <h3>Écrivez-nous un message</h3>
                </div>
                <form className="form" method="post" action="mail/mail.php">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="form-group">
                        <label>Votre nom<span>*</span></label>
                        <input name="name" type="text" placeholder />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="form-group">
                        <label>Votre sujet<span>*</span></label>
                        <input name="subject" type="text" placeholder />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="form-group">
                        <label>Votre Email<span>*</span></label>
                        <input name="email" type="email" placeholder />
                      </div>	
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="form-group">
                        <label>Votre numéro de téléphone<span>*</span></label>
                        <input name="company_name" type="text" placeholder />
                      </div>	
                    </div>
                    <div className="col-12">
                      <div className="form-group message">
                        <label>Votre message*<span>*</span></label>
                        <textarea name="message" placeholder defaultValue={""} />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="btnplacé">
                      <div className="form-group button">
                        <button type="submit" className="btn1 ">Envoyer un message</button>
                      </div>
                      </div>
                    </div>
                    <span className="rakah">* Ce champ est obligatoire</span>
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