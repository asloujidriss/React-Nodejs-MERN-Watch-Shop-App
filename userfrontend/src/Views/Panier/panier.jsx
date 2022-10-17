import React from 'react'
import axios from "axios";
import CommandeService from "../../Services/CommandeService"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart } from '../../features/cartSlice'
import "./panier.css"
import { useState } from 'react';
// import { useCart } from 'react-use-cart'

const Panier = () => {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)


const userId = JSON.parse(localStorage.getItem('userId'))
console.log(userId)

  const createorder =()=>{
    let data  = {
      client : userId,
      products  : cart.articles.map(a => a._id),
      total : cart.total
    }
    CommandeService.create(data).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <div>

      {/* Shopping Cart */}
      <div className="shopping-cart section">
        <div className="container">
          <div className="row">
            {/* {articles.map((item) => ( */}
            <div className="col-12">
              {/* Shopping Summery */}
              <table className="table shopping-summery">
                <thead>
                  <tr className="main-hading">
                    <th>Article</th>
                    <th>Nom</th>
                    <th className="text-center">Prix</th>
                    <th className="text-center">supprimer</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    cart.articles.map(article => {
                      return (
                        <>
                          <tr>
                            <td className="image" data-title="No"><img src={'http://localhost:5010/getImage/' + article.image} alt="#" /></td>
                            <td className="product-des" data-title="Description">
                              <p className="product-name"><a href="#">{article.ref_art}</a></p>
                            </td>
                            <td className="price" data-title="Price"><span>{article.prix}</span></td>

                            <td className="action" data-title="Remove"><a onClick={() => dispatch(removeFromCart({ article: article }))} ><i className="ti-trash remove-icon" /></a></td>
                          </tr>
                        </>
                      )
                    })
                  }


                </tbody>
              </table>
              {/*/ End Shopping Summery */}

            </div>
            {/* )
       )
       } */}
          </div>

          <div className="row">
            <div className="col-12">
              {/* Total Amount */}
              <div className="total-amount">
                <div className="row">
                  <div className="col-lg-8 col-md-5 col-12">
                    <div className="lefti">
                      <div className="coupon">
                        <form action="#" target="_blank">
                          <input name="Coupon" placeholder="Entrer Votre Coupon" />
                          <button className="btn">Appliquer</button>
                        </form>
                      </div>
                      <div className="checkbox">
                        <label className="checkbox-inline" htmlFor={2}><input name="news" id={2} type="checkbox" /> Livraison (+8Dt)</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-7 col-12">
                    <div className="right">
                      <ul>
                        <li>Sous-total panier<span>{cart.total} DT</span></li>
                        <li>Livraison<span>Gratuit</span></li>
                        <li className="last">Vous payez<span>{cart.total} Dt</span></li>
                      </ul>
                      <div className='dannibtn'>
                        <div className="button5">
                          <a href="#" className="btn" onClick={createorder}>Commander</a>
                          <Link to="/" className="btn">Continuez vos achats</Link>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              {/*/ End Total Amount */}
            </div>
          </div>
        </div>
      </div>
      {/*/ End Shopping articles */}






    </div>
  )
}

export default Panier