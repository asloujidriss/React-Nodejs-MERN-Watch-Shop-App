import React from 'react'
import { Link } from 'react-router-dom'
import "./favoris.css"


const Favoris = () => {

  return (
    <div>
        
{/* Shopping Cart */}
<div className="shopping-cart section">
  <div className="container">
    <div className="row">
      <div className="col-12">
        {/* Shopping Summery */}
        <table className="table shopping-summery">
          <thead>
            <tr className="main-hading">
              <th>Articles</th>
              <th>Nom</th>
              <th className="text-center">Disponibilité</th>
              <th className="text-center">Ajouter</th>
              <th className="text-center"><i className="ti-trash remove-icon" /></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="image" data-title="No"><img src="https://via.placeholder.com/100x100" alt="#" /></td>
              <td className="product-des" data-title="Description">
                <p className="product-name"><a href="#">Women Dress</a></p>
                <p className="product-des">Maboriosam in a tonto nesciung eget  distingy magndapibus.</p>
              </td>
              <td className="price" data-title="Price"><span>Disponible</span></td>
              <button class="btn btn-secondary">Ajouter au panier</button>
              <td className="action" data-title="Remove"><a href="#"><i className="ti-trash remove-icon" /></a></td>
            </tr>


            <tr>
              <td className="image" data-title="No"><img src="https://via.placeholder.com/100x100" alt="#" /></td>
              <td className="product-des" data-title="Description">
                <p className="product-name"><a href="#">Women Dress</a></p>
                <p className="product-des">Maboriosam in a tonto nesciung eget  distingy magndapibus.</p>
              </td>
              <td className="price" data-title="Price"><span>Non Disponible</span></td>

              <button class="btn btn-secondary">Ajouter au panier</button>
              <td className="action" data-title="Remove"><a href="#"><i className="ti-trash remove-icon" /></a></td>
            </tr>


            <tr>
              <td className="image" data-title="No"><img src="https://via.placeholder.com/100x100" alt="#" /></td>
              <td className="product-des" data-title="Description">
                <p className="product-name"><a href="#">Women Dress</a></p>
                <p className="product-des">Maboriosam in a tonto nesciung eget  distingy magndapibus.</p>
              </td>
              <td className="price" data-title="Price"><span>Disponible</span></td>
            
              <button class="btn btn-secondary" >Ajouter au panier</button>
              <td className="action" data-title="Remove"><a href="#"><i className="ti-trash remove-icon" /></a></td>
            </tr>
          </tbody>
        </table>
        {/*/ End Shopping Summery */}
      </div>
    </div>
  </div>
</div>
{/*/ End Shopping Cart */}

    </div>
  )
}

export default Favoris