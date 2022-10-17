import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UsersService from "../../../Services/UsersService"
import ArticleService from "../../../Services/ArticleService";
import ServiceRepService from "../../../Services/ServiceRepService";
import CommandeService from "../../../Services/CommandeService"


const Layout = () => {

  const [Articles, setAricles] = useState([]);
  const GetAllart = () => {
    ArticleService.getAll()
      .then((res) => {
        console.log(res);
        setAricles(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    GetAllart();
  }, []);


  const [Commande, setCommande] = useState([]);
  const GetAllcmd = () => {
    CommandeService.getAll()
      .then((res) => {
        console.log(res);
        setCommande(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    GetAllcmd();
  }, []);


  const [ServiceRep, setService] = useState([]);
  const GetAllserv = () => {
    ServiceRepService.getAll()
      .then((res) => {
        console.log(res);
        setService(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    GetAllserv();
  }, []);

  const [Users, setUsers] = useState([]);
  const GetAllusers = () => {
    UsersService.getAll()
      .then((res) => {
        console.log(res);
        setUsers(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    GetAllusers();
  }, []);

  return (
    <div>
      {" "}
      <ul className="breadcrumb">
      </ul>
      <div className="page-content-wrap">
        {/* START WIDGETS */}
        <div className="row">


        <div className="col-md-3">
            <div
              className="widget widget-default widget-item-icon"
              onclick="location.href='pages-address-book.html';"
            >
              <div className="widget-item-left">
              <span class="fa fa-users"></span>
              </div>
              <div className="widget-data">
                <div className="widget-int num-count">{Object.keys(Users).length}</div>
                <div className="widget-title">Nombre des Utilisateurs</div>
                <div className="widget-subtitle">Dans votre site</div>
              </div>
              <div className="widget-controls">
                <a
                  href="#"
                  className="widget-control-right widget-remove"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Remove Widget"
                >
                  <span className="fa fa-times" />
                </a>
              </div>
            </div>

            {/* END WIDGET REGISTRED */}
          </div>

            {/* START WIDGET REGISTRED */}
            <div className="col-md-3">
            <div
              className="widget widget-default widget-item-icon"
              onclick="location.href='pages-address-book.html';"
            >
              <div className="widget-item-left">
              <span class="fa fa-list"></span>
              </div>
              <div className="widget-data">
                <div className="widget-int num-count">{Object.keys(Articles).length}</div>
                <div className="widget-title">Nombre des Articles</div>
                <div className="widget-subtitle">Dans votre site</div>
              </div>
              <div className="widget-controls">
                <a
                  href="#"
                  className="widget-control-right widget-remove"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Remove Widget"
                >
                  <span className="fa fa-times" />
                </a>
              </div>
            </div>

            {/* END WIDGET REGISTRED */}
          </div>


          <div className="col-md-3">
            {/* START WIDGET REGISTRED */}
            <div
              className="widget widget-default widget-item-icon"
              onclick="location.href='pages-address-book.html';"
            >
              <div className="widget-item-left">
                <span class="fa fa-wrench"></span>
              </div>
              <div className="widget-data">
                <div className="widget-int num-count">{Object.keys(ServiceRep).length}</div>
                <div className="widget-title">Nombre des Services</div>
                <div className="widget-subtitle">Dans votre site</div>
              </div>
              <div className="widget-controls">
                <a
                  href="#"
                  className="widget-control-right widget-remove"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Remove Widget"
                >
                  <span className="fa fa-times" />
                </a>
              </div>
            </div>
          </div>
          {/* END WIDGET REGISTRED */}

          {/* START WIDGET SLIDER */}
          <div className="col-md-3">
            
          <div
              className="widget widget-default widget-item-icon"
              onclick="location.href='pages-address-book.html';"
            >
              
              <div className="widget-item-left">
                <span class="glyphicon glyphicon-shopping-cart"></span>
              </div>
                <div className="widget-data">
                <div className="widget-int num-count">{Object.keys(Commande).length}</div>
                  <div className="widget-title">Nombre total<br />de commande</div>
                  <div className="widget-subtitle">27/11/2022 15:23</div>
                </div>
              
              <div className="widget-controls">
                <a
                  href="#"
                  className="widget-control-right widget-remove"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Remove Widget"
                >
                  <span className="fa fa-times" />
                </a>
              </div>
            </div>
            {/* END WIDGET SLIDER */}
          </div>

          <div className="col-md-3">
            {/* START WIDGET MESSAGES */}
            <Link to="/contact">
              <div
                className="widget widget-default widget-item-icon"
                onclick="location.href='pages-messages.html';">
                <div className="widget-item-left">
                  <span className="fa fa-envelope" />
                </div>
                <div className="widget-data">
                  <div className="widget-int num-count">48</div>
                  <div className="widget-title">Nouveaux messages</div>
                  <div className="widget-subtitle">Dans votre boîte aux lettres</div>
                </div>
                <div className="widget-controls">
                  <a
                    href="#"
                    className="widget-control-right widget-remove"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Remove Widget"
                  >
                    <span className="fa fa-times" />
                  </a>
                </div>
              </div>
            </Link>
            {/* END WIDGET MESSAGES */}
          </div>

          <div className="col-md-9">
            {/* START WIDGET CLOCK */}
            <div className="widget widget-info widget-padding-sm">
              <div className="widget-big-int plugin-clock">00:00</div>
              <div className="widget-subtitle plugin-date">Chargement...</div>
              <div className="widget-controls">
                <a
                  href="#"
                  className="widget-control-right widget-remove"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Remove Widget"
                >
                  <span className="fa fa-times" />
                </a>
              </div>
              <div className="widget-buttons widget-c3">
                <div className="col">
                  <a href="#">
                    <span className="fa fa-clock-o" />
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <span className="fa fa-bell" />
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <span className="fa fa-calendar" />
                  </a>
                </div>
              </div>
            </div>
            {/* END WIDGET CLOCK */}
          </div>

        </div>
        {/* END WIDGETS */}
        <div className="row">
          <div className="col-md-6">
            {/* START USERS ACTIVITY BLOCK */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title-box">
                  <h3>Activité des utilisateurs</h3>
                  <span>Utilisateurs vs retour</span>
                </div>
                <ul className="panel-controls" style={{ marginTop: 2 }}>
                  <li>
                    <a href="#" className="panel-fullscreen">
                      <span className="fa fa-expand" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="panel-refresh">
                      <span className="fa fa-refresh" />
                    </a>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <span className="fa fa-cog" />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#" className="panel-collapse">
                          <span className="fa fa-angle-down" /> S'effondrer
                        </a>
                      </li>
                      <li>
                        <a href="#" className="panel-remove">
                          <span className="fa fa-times" /> Retirer
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="panel-body padding-0">
                <div
                  className="chart-holder"
                  id="dashboard-bar-1"
                  style={{ height: 200 }}
                />
              </div>
            </div>
            {/* END USERS ACTIVITY BLOCK */}
          </div>

          <div className="col-md-6">
            {/* START VISITORS BLOCK */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title-box">
                  <h3>Visiteurs</h3>
                  <span>Visiteurs (le mois dernier)</span>
                </div>
                <ul className="panel-controls" style={{ marginTop: 2 }}>
                  <li>
                    <a href="#" className="panel-fullscreen">
                      <span className="fa fa-expand" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="panel-refresh">
                      <span className="fa fa-refresh" />
                    </a>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <span className="fa fa-cog" />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#" className="panel-collapse">
                          <span className="fa fa-angle-down" /> S'effondrer
                        </a>
                      </li>
                      <li>
                        <a href="#" className="panel-remove">
                          <span className="fa fa-times" /> Retirer
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="panel-body padding-0">
                <div
                  className="chart-holder"
                  id="dashboard-donut-1"
                  style={{ height: 200 }}
                />
              </div>
            </div>
            {/* END VISITORS BLOCK */}
          </div>

        </div>

        <div className="row">
          <div className="col-md-12">
          </div>
          <div
            className="common-modal modal fade"
            id="common-Modal1"
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
          >
            <div className="modal-content">
              <ul className="list-inline item-details">
                <li>
                  <a href="http://themifycloud.com/downloads/janux-premium-responsive-bootstrap-admin-dashboard-template/">
                    Modèles d'administration
                  </a>
                </li>
                <li>
                  <a href="http://themescloud.org">Bootstrap themes</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Layout;