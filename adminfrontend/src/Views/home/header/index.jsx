import React from "react"

const Header =()=>{
    return(
        <div>
        
        {/* SEARCH */}
        <li className="xn-search">
       <form role="form">
         <input type="text" name="search" placeholder="Recherchez..." />
       </form>
     </li>   
     {/* END SEARCH */}

       {/* SIGN OUT */}
       <li className="xn-icon-button pull-right">
       <a href="#" className="mb-control" data-box="#mb-signout"><span className="fa fa-sign-out" /></a>                        
     </li> 
     {/* END SIGN OUT */}

{/* MESSAGES */}
<li className="xn-icon-button pull-right">
       <a href="#"><span className="fa fa-comments" /></a>
       <div className="informer informer-danger">4</div>
       <div className="panel panel-primary animated zoomIn xn-drop-left xn-panel-dragging">
         <div className="panel-heading">
           <h3 className="panel-title"><span className="fa fa-comments" /> Messages</h3>                                
           <div className="pull-right">
             <span className="label label-danger">4 nouveaux</span>
           </div>
         </div>
         <div className="panel-body list-group list-group-contacts scroll" style={{height: 200}}>
           <a href="#" className="list-group-item">
             <div className="list-group-status status-online" />
             <img src="assets/images/users/user2.jpg" className="pull-left" alt="John Doe" />
             <span className="contacts-title">Souhir </span>
             <p>Ma montre ne fonctionne pas encore</p>
           </a>
           <a href="#" className="list-group-item">
             <div className="list-group-status status-away" />
             <img src="assets/images/users/user.jpg" className="pull-left" alt="Dmitry Ivaniuk" />
             <span className="contacts-title">Mohammed</span>
             <p>Combien coûte ce bracelet</p>
           </a>
           <a href="#" className="list-group-item">
             <div className="list-group-status status-away" />
             <img src="assets/images/users/user3.jpg" className="pull-left" alt="Nadia Ali" />
             <span className="contacts-title">Nadia Ali</span>
             <p>Je veux regarder tous vos articles</p>
           </a>
           <a href="#" className="list-group-item">
             <div className="list-group-status status-offline" />
             <img src="assets/images/users/user6.jpg" className="pull-left" alt="Darth Vader" />
             <span className="contacts-title">Ahlem </span>
             <p>je veux qu'on me rende mon argent!</p>
           </a>
         </div>     
         <div className="panel-footer text-center">
           <a href="pages-messages.html">Afficher tous les messages</a>
         </div>                            
       </div>                        
     </li>
     {/* END MESSAGES */}

 </div>
 
    )
}
export default Header