import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';





import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Promo from './Views/Home/Accueil';
import Login from "./Views/Login/login"
import Register from "./Views/Register/register"
import Profile from "./Views/Profile/profile"
import Contact from "./Views/Contact/contact"
import Paiement from "./Views/Paiement/paiement"
import DetailsPdt from './Views/ProductDetails/DetailsPdt';

import Homme from "./Views/Homme/homme"
import MontresHomme from "./Views/Homme/MH"
import LunettesHomme from "./Views/Homme/LH"
import AccessoiresHomme from"./Views/Homme/AH"

import Femme from "./Views/Femme/femme"
import MontresFemme from "./Views/Femme/MF"
import LunettesFemme from "./Views/Femme/LF"
import AccessoiresFemme from"./Views/Femme/AF"

import Enfants from "./Views/Enfants/enfants"
import MontresEnfants from "./Views/Enfants/ME"
import LunettesEnfants from "./Views/Enfants/LE"
import AccessoiresEnfants from"./Views/Enfants/AE"

import Error404 from  "./Views/Error/error"

import Panier from  "./Views/Panier/panier"
import Favoris from './Views/Favoris/favoris';
import Getmyser from './Views/ServiceRep/Getmyser';
import { store } from './app/store';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from 'react-redux';
let persistor = persistStore(store);
ReactDOM.render(
  <React.StrictMode>
       <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
      <Routes>
      
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Profile/:id" element={<Profile />} />
        <Route>
        <Route exact path="/" element={<App />}>
        <Route exact path="/" element={<Promo />} />
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Paiement" element={<Paiement />} />

        <Route exact path="/getmyser" element={<Getmyser/>} />

        <Route exact path="/detailsPdt/:id" element={<DetailsPdt />} />

        <Route exact path="/Homme" element={<Homme />} />
        <Route exact path="/MontresHomme" element={<MontresHomme />} />
        <Route exact path="/LunettesHomme" element={<LunettesHomme />} />
        <Route exact path="/AccessoiresHomme" element={<AccessoiresHomme />} />

        <Route exact path="/Femme" element={<Femme />} />
        <Route exact path="/MontresFemme" element={<MontresFemme />} />
        <Route exact path="/LunettesFemme" element={<LunettesFemme />} />
        <Route exact path="/AccessoiresFemme" element={<AccessoiresFemme />} />

        <Route exact path="/Enfants" element={<Enfants />} />
        <Route exact path="/MontresEnfants" element={<MontresEnfants />} />
        <Route exact path="/LunettesEnfants" element={<LunettesEnfants />} />
        <Route exact path="/AccessoiresEnfants" element={<AccessoiresEnfants />} /> 

        <Route exact path="/panier" element={<Panier/>} />
        <Route exact path="/favoris" element={<Favoris/>} />

        </Route>
        </Route>
        <Route path="*" element={<Error404/>} />
        </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();


  // {/* Start Most Popular */}
  // <div className="product-area most-popular section">
  //   <div className="container">
  //     <div className="row">
  //       <div className="col-12">
  //         <div className="section-title">
  //           <h2>Articles d'actualité</h2>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="row">
  //       <div className="col-12">
  //         <div className="owl-carousel popular-slider">
  //           {/* Start Single Product */}
  //           <div className="single-product">
  //             <div className="product-img">
  //               <a href="product-details.html">
  //                 <img className="default-img" src="assets/images/guess redimensionner.jpg" alt="#" />
                  
  //                 <span className="out-of-stock">Hot</span>
  //               </a>
  //               <div className="button-head">
  //                 <div className="product-action">
  //                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
  //                   <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
  //                   <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
  //                 </div>
  //                 <div className="product-action-2">
  //                   <a title="Add to cart" href="#">Add to cart</a>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="product-content">
  //               <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
  //               <div className="product-price">
  //                 <span className="old">$60.00</span>
  //                 <span>$50.00</span>
  //               </div>
  //             </div>
  //           </div>
  //           {/* End Single Product */}
  //           {/* Start Single Product */}
  //           <div className="single-product">
  //             <div className="product-img">
  //               <a href="product-details.html">
  //                 <img className="default-img" src="assets/images/guess redimensionner.jpg" alt="#" />
                  
  //               </a>
  //               <div className="button-head">
  //                 <div className="product-action">
  //                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
  //                   <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
  //                   <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
  //                 </div>
  //                 <div className="product-action-2">
  //                   <a title="Add to cart" href="#">Add to cart</a>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="product-content">
  //               <h3><a href="product-details.html">Women Hot Collection</a></h3>
  //               <div className="product-price">
  //                 <span>$50.00</span>
  //               </div>
  //             </div>
  //           </div>
  //           {/* End Single Product */}
  //           {/* Start Single Product */}
  //           <div className="single-product">
  //             <div className="product-img">
  //               <a href="product-details.html">
  //                 <img className="default-img" src="assets/images/guess redimensionner.jpg" alt="#" />
                 
  //                 <span className="new">New</span>
  //               </a>
  //               <div className="button-head">
  //                 <div className="product-action">
  //                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
  //                   <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
  //                   <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
  //                 </div>
  //                 <div className="product-action-2">
  //                   <a title="Add to cart" href="#">Add to cart</a>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="product-content">
  //               <h3><a href="product-details.html">Awesome Pink Show</a></h3>
  //               <div className="product-price">
  //                 <span>$50.00</span>
  //               </div>
  //             </div>
  //           </div>
  //           {/* End Single Product */}
  //           {/* Start Single Product */}
  //           <div className="single-product">
  //             <div className="product-img">
  //               <a href="product-details.html">
  //                 <img className="default-img" src="assets/images/guess redimensionner.jpg" alt="#" />
                  
  //               </a>
  //               <div className="button-head">
  //                 <div className="product-action">
  //                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
  //                   <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
  //                   <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
  //                 </div>
  //                 <div className="product-action-2">
  //                   <a title="Add to cart" href="#">Add to cart</a>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="product-content">
  //               <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
  //               <div className="product-price">
  //                 <span>$50.00</span>
  //               </div>
  //             </div>
  //           </div>
  //           {/* End Single Product */}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  // {/* End Most Popular Area */}