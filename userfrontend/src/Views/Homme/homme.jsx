import { useEffect } from "react"
import ArticleService from "../../Services/ArticlesService"
import { useState } from "react"
import "./homme.css"
import axios from "axios"
import { useDispatch } from 'react-redux'
import { addToCart } from "../../features/cartSlice"




const Homme = () => {




  const dispatch = useDispatch()

  const [articles, setArt] = useState([])
  const [handleClick] = useState([])
  
  const getbygenreH = () => {
    ArticleService.getbygenreH().then(res => {
      console.log("response >>>>", res)
      setArt(res.data.data)
    }).catch(err => {
      console.log(err)
    })

  }

  useEffect(() => {
    getbygenreH()
  }, [])
  return (
    <>
      {/* Start Single Tab */}
      
      <div role="tabpanel">
        <div className="tab-singleh">
          <div className="row">
            {articles.map((item, key) => {
              return (
                <div className="col-xl-3 col-lg-4 col-md-4 col-12" key={key}>
                  <div className="single-product">
                    <div className="product-img">
                      <a href="product-details.html">
                        {item.image && (
                          <img className="default-img" style={{ height: "300px" }} src={'http://localhost:5010/getImage/' + item.image}
                          />
                        )}

                      </a>
                      <div className="button-head">
                        <div className="product-action">
                          <a title="Favoris" href="#"><i className=" ti-heart " /><span>Ajouter au favoris</span></a>
                        </div>
                        <div className="product-action-2">
                          <button onClick={() => dispatch(addToCart({ article: item }))} type="button" class="btne btn-dark" >Ajouter au panier</button>
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
                      <h3><a href="product-details.html">{item.description}</a></h3>
                      <div className="product-price">
                        <span>{item.prix} Dt</span>
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
     



    </>
  )
}
export default Homme