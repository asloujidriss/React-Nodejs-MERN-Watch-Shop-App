import React from 'react'
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div>
      {/* START PAGE SIDEBAR */}
      <div className="page-sidebar">
        {/* START X-NAVIGATION */}
        <ul className="x-navigation">
          <li className="xn-logo">
            
            <Link to="/">
            <span class="glyphicon glyphicon-user"></span> Admin </Link>
            
            {/* <a href="#" className="x-navigation-control" /> */}
          </li>
          <li className="xn-profile">
            <a href="#" className="profile-mini">
            
              <img src="assets/images/users/admin.jpg" alt="Aziz" />
            </a>
            <div className="profile">
              <div className="profile-image">
                <img src="assets/images/users/admin.jpg" alt="Aziz" />
              </div>
              <div className="profile-data">
                <div className="profile-data-name">Zouhaier ben abdesslem</div>
                <div className="profile-data-title">Commerçant</div>
              </div>
            </div>
          </li>

          <li className="active">

            <Link to="/" aria-expanded="true">
              <i className="ti-layout-sidebar-left" />
              <i class="fa fa-desktop"></i>
              <span>Dashboard</span>
            </Link>

          </li>
          <li className="openable">
            <Link to="./getAllUsers" aria-expanded="true">
              <i className="ti-layout-sidebar-left" />
              <span class="fa fa-users"></span>
              <span>Table des Utilisateurs</span>
            </Link>

          </li>

          <li className="openable">
            <Link to="./getAllArticles" aria-expanded="true">
              <i className="ti-layout-sidebar-left" />
              <span class="fa fa-list"></span>
              <span>Table des Articles</span>
            </Link>

          </li>

          <li className="openable">
            <Link to="./getAllOrders" aria-expanded="true">
              <i className="ti-layout-sidebar-left" />
              <span class="glyphicon glyphicon-shopping-cart"></span>
              <span>Table des Commandes</span>
            </Link>

          </li>

          <li className="openable">
            <Link to="./getAllLiv" aria-expanded="true">
              <i className="ti-layout-sidebar-left"/>
              <span class="fa fa-truck"></span>
              <span> Table des Livraison </span>
            </Link>
            </li>

            <li className="openable">
            <Link to="./getAllServices" aria-expanded="true">
              <i className="ti-layout-sidebar-left"/>
              <span class="fa fa-wrench"></span>
              <span> Table des Services </span>
            </Link>
            </li>

        </ul>
        {/* END X-NAVIGATION */}
      </div>

      {/* END PAGE SIDEBAR */}
    </div>
  )
}

export default Sidebar