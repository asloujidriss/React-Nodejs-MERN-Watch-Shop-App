import { Link } from "react-router-dom"

export default () => {
    return (
        <>
            {/* Start Footer Area */}
            <footer className="footer">
                {/* Footer Top */}
                <div className="footer-top section">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-4 col-md-8 col-12">
                                {/* Single Widget */}
                                <div className="single-footer about">
                                    <div className="logo">
                                        <a href="./index.html"><img src={process.env.PUBLIC_URL + "assets/images/Chic No bg.png"} alt /></a>
                                    </div>
                                    <p className="call">Avez-vous une question? <br></br>Appelez-nous sur :<span><a href="tel:123456789">+216 97 342 942</a></span></p>
                                </div>
                                {/* End Single Widget */}
                            </div>

                            <div className="col-lg-2 col-md-6 col-12">
                                {/* Single Widget */}
                                <div className="single-footer links">
                                    <h4>Informations</h4>
                                    <ul>
                                        <li><a href="#">A propos de nous</a></li>
                                        <li><Link to="/Contact">Contactez_Nous</Link></li>
                                        <li><a href="#">Aide</a></li>
                                    </ul>
                                </div>
                                {/* End Single Widget */}
                            </div>
                            <div className="col-lg-2 col-md-6 col-12">
                                {/* Single Widget */}
                                <div className="single-footer links">
                                    <h4>Service Client</h4>
                                    <ul>
                                        <li><Link to="/Paiement">Methodes de Paiement</Link></li>                                        
                                        <li><a href="#">Retour</a></li>
                                        <li><a href="#">Politique de confidentialité</a></li>
                                    </ul>
                                </div>
                                {/* End Single Widget */}
                            </div>
                            <div className="col-lg-2 col-md-6 col-12">
                                {/* Single Widget */}
                                <div className="single-footer social">
                                    <h4>Contacts</h4>
                                    {/* Single Widget */}
                                    <div className="contact">
                                        <ul>
                                            <li>NO. 342 - Rue Victor Hugo</li>
                                            <li>Sousse</li>
                                            <li>chicwatch1@gmail.com</li>
                                            <li>+216 98 260 060</li>
                                        </ul>
                                    </div>
                                    {/* End Single Widget */}
                                </div>
                                {/* End Single Widget */}
                            </div>
                            <div className="col-lg-2 col-md-6 col-12">
                                {/* Single Widget */}
                                <div className="single-footer social">
                                    <h4>Suivez_nous</h4>
                                    <ul>
                                        <li><a href="https://www.facebook.com/ChicWatchSousse"><i className="ti-facebook" /></a></li>
                                        <li><a href="https://www.instagram.com/chic_watch1/"><i className="ti-instagram" /></a></li>
                                    </ul>
                                </div>
                                {/* End Single Widget */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Footer Top */}
                <div className="copyright">
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    <div className="left">
                                        <p>Copyright © 2022 <a href="http://www.wpthemesgrid.com" target="_blank">Wpthemesgrid</a> - Tous droits réservés.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* /End Footer Area */}

        </>

    )
}