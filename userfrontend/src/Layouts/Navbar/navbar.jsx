import { useState } from "react"
import { Link } from "react-router-dom"
import "./navbar.css"
import LoginService from "../../Services/LoginService"
import { useSelector } from "react-redux"


export default () => {
  const [data, setData] = useState({})
  const [Homme] = useState({})
  const cart = useSelector(state => state.cart)
  const handleClick = (e) => {
    e.preventDefault()
    LoginService.logout(data)
      .then(res => {
        // localStorage.setItem("user")
        console.log(res)
        window.location = "/Login"

        localStorage.clear()
      }).catch(error => {
        console.log(error)
      })
  }
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    var id = user._id

  }

  return (
    <>
      {/* Header */}

      <header className="header shop">
        {/* Topbar */}
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-12">
                {/* Top Left */}
                <div className="top-left">
                  <ul className="list-main">
                    <li><i className="ti-headphone-alt" /> +216 98 260 060</li>
                    <li><i className="ti-email" /> chicwatch1@gmail.com </li>
                  </ul>
                </div>
                {/*/ End Top Left */}
              </div>
              <div className="col-lg-7 col-md-12 col-12">
                {/* Top Right */}

                <div className="right-content">
                  <div className="okhra">
                    <ul className="list-main">
                      {
                        localStorage.getItem('isAuthenticated') ?
                          <>

                            <li><Link to={`/Profile/${id}`}> <i className="fa fa-user-circle-o"
                              style={{ float: "left", color: "black", fontSize: "17px", marginLeft: "5px", marginRight: "6px" }} /> <strong> Bienvenue {user?.nom} {user?.prenom}</strong></Link></li>

                            <li onClick={handleClick}> <Link to="/Login"><i className="fa fa-sign-out"
                              style={{ float: "left", color: "black", fontSize: "20px", marginLeft: "21px", marginRight: "6px", marginTop: "1px" }} />
                              <strong> Se déconnecter </strong></Link></li>



                          </> :

                          <div className="tabdil">

                            <div class="nav-inner" style={{ float: "right" }}>
                              <ul class="nav main-menu menu navbar-nav">
                                <li>
                                  <Link to="/Login"
                                    style={{
                                      color: 'black', padding: '0px 0px 0px 0px',
                                      fontWeight: "500", paddingLeft: '18px', background: 'transparent'
                                    }}>
                                    <i className="ti-power-off" /> Se connecter<i class="ti-angle-down"></i></Link>
                                  <div className="habta2">
                                    <ul class="dropdown" style={{ width: "147px", marginLeft: "33px", background: "#fff" }}>
                                      <div className="habta">
                                        <li><Link to="/Register">
                                          {/* <i className="fa fa-sign-in" style={{
                                        float: "left", color: "#c2975b", background: "#fff", fontSize: "15px", marginRight: "10px", marginLeft: "-23px"
                                      }} /> */}
                                          S'inscrire</Link></li>
                                      </div>
                                    </ul>
                                  </div>


                                </li>
                              </ul>
                            </div>

                          </div>
                      }

                      {/* <li><i className="ti-user" /> <Link  to="#">Mon compte</Link></li> */}





                      {/*  <li><i className="ti-power-off" />
                      <li> Se connecter <i class="ti-angle-down"></i>
                      </li>
                      <ul class="dropdown">
                        <li><Link to="/Login">Se connecter</Link></li>
                        <li><Link to="/Register">S'inscrire</Link></li>
                        <li><Link to="/Login"><i className="ti-user" /> Mon compte</Link></li>
                        <li><Link to="/LunettesH">Se dconnecter</Link></li>
                      </ul>
                    </li> */}


                    </ul>
                  </div>
                </div>
                {/* End Top Right */}
              </div>
            </div>
          </div>
        </div>
        {/* End Topbar */}
        <div className="middle-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-12">
                {/* Logo */}
                <div className="logo">
                  <Link to="/"> <img src="assets/images/Chic No bg.png" alt="logo" /> </Link>
                </div>
                {/*/ End Logo */}

                <div className="mobile-nav" />
              </div>
              <div className="col-lg-8 col-md-7 col-12">
                <div className="search-bar-top">
                  <div className="search-bar">
                    <select style={{ border: "none !important" }}>
                      <option selected="selected">toute catégorie</option>
                      <option>Homme</option>
                      <option>Femme</option>
                      <option>Enfants</option>
                    </select>
                    <form>
                      <input name="search" placeholder="Rechercher....." type="search" />
                      <button className="btnn"><i className="ti-search" /></button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-12">
                <div className="right-bar">
                  {/* Search Form */}
                  <div className="sinlge-bar">
                    <Link to="/favoris" className="single-icon"><i className="fa fa-heart-o" aria-hidden="true" /></Link>
                  </div>
                  <div className="sinlge-bar shopping">
                    <Link to="/panier" className="single-icon"><i className="ti-bag" /> <span className="total-count">{cart.articles.length}</span></Link>
                    {/* Shopping Item */}
                    <div className="shopping-item">
                      <div className="dropdown-cart-header">
                        <span>2 Articles</span>
                        <Link to="/panier">Voir panier</Link>
                      </div>
                      <ul className="shopping-list">
                        <li>
                          <Link to="#" className="remove" title="Remove this item"><i className="fa fa-remove" /></Link>
                          <Link className="cart-img" to="#"><img src="https://via.placeholder.com/70x70" alt="#" /></Link>
                          <h4><Link to="#">Woman Ring</Link></h4>
                          <p className="quantity">1x - <span className="amount">$99.00</span></p>
                        </li>
                        <li>
                          <Link to="#" className="remove" title="Remove this item"><i className="fa fa-remove" /></Link>
                          <Link className="cart-img" to="#"><img src="https://via.placeholder.com/70x70" alt="#" /></Link>
                          <h4><Link to="#">Woman Necklace</Link></h4>
                          <p className="quantity">1x - <span className="amount">$35.00</span></p>
                        </li>
                      </ul>
                      <div className="bottom">
                        <div className="total">
                          <span>Total</span>
                          <span className="total-amount">$134.00</span>
                        </div>
                        <Link to="/Paiement" className="btn animate">caisse</Link>
                      </div>
                    </div>
                    {/*/ End Shopping Item */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header Inner */}
        <div className="header-inner">
          <div className="container">
            <div className="cat-nav-head">
              <div className="row">
                <div className="col-lg-3">

                </div>
                <div className="col-lg-12 col-12">
                  <div className="menu-area">
                    {/* Main Menu */}
                    <nav className="navbar navbar-expand-lg">
                      <div className="navbar-collapse">
                        <div className="nav-inner">
                          <ul className="nav main-menu menu navbar-nav">
                            {/* <li className="active"><Link to ="/"> Home </Link> </li> */}
                            <li><Link to="/Homme">Homme<i class="ti-angle-down"></i></Link>
                              <ul class="dropdown">
                                <li><Link to="/MontresHomme">Montres</Link></li>
                                <li><Link to="/LunettesHomme">Lunettes</Link></li>
                                <li><Link to="/AccessoiresHomme">Accessoires</Link></li>
                              </ul>
                            </li>

                            <li><Link to="/Femme">Femme<i class="ti-angle-down"></i></Link>
                              <ul class="dropdown">
                                <li><Link to="/MontresFemme">Montres</Link></li>
                                <li><Link to="/LunettesFemme">Lunettes</Link></li>
                                <li><Link to="/AccessoiresFemme">Accessoires</Link></li>
                              </ul>
                            </li>

                            <li><Link to="/Enfants">Enfants<i class="ti-angle-down"></i></Link>
                              <ul class="dropdown">
                                <li><Link to="/MontresEnfants">Montres</Link></li>
                                <li><Link to="/LunettesEnfants">Lunettes</Link></li>
                                <li><Link to="/AccessoiresEnfants">Accessoires</Link></li>
                              </ul>
                            </li>
                            <li><Link to="/getmyser">Service Réparation</Link></li>

                            <li><Link to="/Contact">Contactez_Nous</Link></li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                    {/*/ End Main Menu */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Header Inner */}
      </header>
      {/*/ End Header */}





    </>
  )
}