import { useEffect } from "react"
import ArticleService from "../../Services/ArticlesService"
import { useState } from "react"
// import { useCart } from "react-use-cart"
import "./home.css"
import { Link } from "react-router-dom"


// The useState function is a built in hook that can be imported from the react package.
// It allows you to add state to your functional components.
// Using the useState hook inside a function component,
// you can create a piece of state without switching to class components.


const Promo = () => {

  const [articles, setArt] = useState([])
  const [promotion, setPromo] = useState([])
  // const [searchTerm,setSearchTerm]=useState("")


  const [handleClick] = useState([])

  const GetAll = () => {
    ArticleService.getAll().then(res => {
      console.log("response >>>>", res)
      setArt(res.data.data)
    }).catch(err => {
      console.log(err)
    })

  }


  const getbyPromo = () => {
    ArticleService.getbyPromo(true).then(res => {
      console.log("response >>>>", res)
      setPromo(res.data.data)
    }).catch(err => {
      console.log(err)
    })

  }

  // import React,{ useState } from "react";
  //  import list from "../data";
  //   import Cards from "./card"; 
  //   import "../styles/amazon.css";
  // const Amazon = ({ handleClick }) => {
  //    return (
  //    <section>
  //     {list.map((item) => (
  //     <Cards key={item.id} item={item} handleClick={handleClick} />
  //     )
  //     )
  //     }   
  //      </section>)
  //     };

  // export default Amazon;

  useEffect(() => {
    GetAll()
    getbyPromo()
  }, [])
  return (
    <>

      {/* Slider Area */}
      <section className="hero-slider">

        <div className="watchmage">
          {/* Single Slider */}
          <div className="single-slider">

            <img src="assets/images/watches.jpg" alt="#" />

            {/*<div className="container">
      
      <div className="row no-gutters">
        <div className="col-lg-9 offset-lg-3 col-12">
          
        <div className="text-inner">
            <div className="row">
              <div className="col-lg-7 col-12">
                <div className="hero-text">
                  <h1><span>UP TO 50% OFF </span>Shirt For Man</h1>
                  <p>Maboriosam in a nesciung eget magnae <br /> dapibus disting tloctio in the find it pereri <br /> odiy maboriosm.</p>
                  <div className="button">
                    <a href="#" className="btn">Shop Now!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>*/}
          </div>
        </div>
        {/*/ End Single Slider */}
      </section>
      {/*/ End Slider Area */}

      <div>
        {/* Start Product Area */}
        <div className="product-area section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h2>Nouvelles Arrivées</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="product-info">

                  <div className="tab-content" id="myTabContent">
                    {/* Start Single Tab */}
                    <div className="tab-pane fade show active" id="man" role="tabpanel">
                      <div className="tab-single">
                        <div className="row">
                          {articles.map((item, key) => {
                            return (
                              <div className="col-xl-3 col-lg-4 col-md-4 col-12" key={key}>
                                <div className="single-product">
                                  <li className="product-img">
                                    <Link to={`/detailsPdt/${item._id}`}>
                                      {item.image && (
                                        <img className="default-img" style={{ height: "300px" }} src={'http://localhost:5010/getImage/' + item.image}
                                        />
                                      )}
                                    </Link>
                                    <div className="button-head">
                                      <div className="product-action">
                                        <a title="Favoris" href="#"><i className=" ti-heart " /><span>Ajouter au favoris</span></a>
                                      </div>
                                      <div className="product-action-2">
                                        
                                        <button type="button" class="btne btn-dark" onClick={() => handleClick(item)}>Ajouter au panier</button>
                                        {/* <button title="Ajouter au panier" 
                              onClick={()=> addItem(props.item)} > Ajouter au panier </button> */}
                              
                                      </div>
                                    </div>
                                  </li>
                                  <div className="product-content">
                                    <h3><Link to={`/detailsPdt/${item._id}`}>{item.designation}</Link></h3>
                                    <div className="product-price">
                                      <span>{item.prix} TND</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          })
                          }
                        </div>
                      </div>
                    </div>
                    {/*/ End Single Tab */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Product Area */}

        {/* Start Midium Banner  */}
        <section className="midium-banner">
          <div className="container">
            <div className="row">
            </div>
          </div>
        </section>
        {/* End Midium Banner */}

        {/* Start Shop Home List  */}
        <section className="shop-home-list section">
          <div className="container">
          <h1>En promotion</h1>
            <div className="row">
                      {promotion.map((item, key) => {
                            return (
              <div className="col-lg-4 col-md-6 col-12">
                <div className="row">
                  <div className="col-12">
                    <div className="shop-section-title">
                   
                    </div>
                  </div>
                </div>
                {/* Start Single List  */}
                <div className="single-list">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="list-image overlay">
                      <Link to={`/detailsPdt/${item._id}`}>
                                      {item.image && (
                                        <img className="default-img" style={{ height: "200px" }} src={'http://localhost:5010/getImage/' + item.image}
                                        />
                                      )}
                                    </Link>
                        <a href="#" className="buy"><i className="fa fa-shopping-bag" /></a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 no-padding">
                      <div className="content">
                        <h4 className="title"><a href="#">{item.designation}</a></h4>
                        <p className="price with-discount">{item.prix}TND</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single List  */}
              </div>
                  )
                })
                }
  
            </div>
          </div>
        </section>
        {/* End Shop Home List  */}
      </div>

    </>
  )
}
export default Promo



//<div className="nav-main">
//{/* Tab Nav */}
//<ul className="nav nav-tabs" id="myTab" role="tablist">
  //<li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#man" role="tab">Homme</a></li>
  //<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#women" role="tab">Femme</a></li>
  //<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#kids" role="tab">Enfants</a></li>
//</ul>
//{/*/ End Tab Nav */}
//</div> 