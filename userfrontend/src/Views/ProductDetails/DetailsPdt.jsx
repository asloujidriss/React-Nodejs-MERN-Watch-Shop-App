import React from "react"
import "./DetailsPdt.css"
import ArticlesService from "../../Services/ArticlesService"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"

const DetailPdt = () => {
  const [data, setData] = useState({})

  const {id} = useParams()

  const onChangehandle = (e) => {
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    ArticlesService.update(id,data).then(res => {
    //  localStorage.setItem('user')
      console.log(res)

    }).catch(err => {
      console.log(err)
    })

  }

  useEffect(() => {
    ArticlesService.getbyID(id).then(res => {
      console.log(res)
      setData(res.data.data)

    }).catch(err => {
      console.log(err)
    })

  }, []) 
    return(
    <>


<div className="container-fluid mt-5">
  <div className="row row-sm">
    <div className="col-md-6 _boxzoom">
      {/* <div className="zoom-thumb">
        <ul className="piclist">
          <li>{data.image &&(
            <img src={"http://localhost:5010/getImage/" + data.image} alt />
            )}
            </li>
        </ul>
      </div> */}
      <div className="_product-images">
        <div className="picZoomer">
          <img className="my_img" src={"http://localhost:5010/getImage/" + data.image} alt />
        </div>
      </div>
    </div>
    <div className="col-md-6 ">
      <div className="_product-detail-content">
        <p className="_p-name">{data.designation}<br/><p>{data.ref_art}</p></p>
        
        <div className="_p-price-box">
          <div className="p-list">
            {/* <span> Au lieu de <del> 600 Dt </del> </span> */}
            <span className="price"> {data.prix} TND </span>
          </div>
          <div className="_p-add-cart">
            <div className="_p-qty">
              <span>Add Quantity</span>
              <div className="value-button decrease_" id value="Decrease Value">-</div>
              <input type="number" name="qty" id="number" defaultValue={1} />
              <div className="value-button increase_" id value="Increase Value">+</div>
            </div>
          </div>
          <div className="_p-features">
            <span> Description à propos de ce produit: </span>
             {data.description}                 
          </div>
          <form action method="post" acceptCharset="utf-8">
            <ul className="spe_ul" />
            <div className="tahbit">
            <div className="_p-qty-and-cart">
              <div className="_p-add-cart">
                <button className="btn-theme btn btn-light" tabIndex={0}>
                  <i className="fa fa-shopping-cart" /> Acheter maintenant
                </button>
                <button className="btn-theme btn btn-light" tabIndex={0}>
                  <i className="fa fa-shopping-cart" /> Ajouter au panier
                </button>  
              </div>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <section className="sec bg-light">
    <div className="container">
    </div>
  </section>
</div>

</>
)
}
export default DetailPdt