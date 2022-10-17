import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import LivraisonService from '../../../Services/LivraisonService'
import Swal from 'sweetalert2'


function UpdateLiv() {
    const navigate=useNavigate()
    const [data,setData]=useState({})
    const {id}=useParams()
    const onChangehandle=(e)=>{
      setData({
        ...data,
        [e.target.name] : e.target.value
      })
    }
    const onSubmitHandle=(e)=>{
      e.preventDefault()
      Swal.fire({
        title: 'Voulez-vous enregistrer les modifications?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Enregistrer',
        denyButtonText: `N'enregistre pas`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate("/getAllLiv")
          LivraisonService.update(id,data).then(res=>{
            console.log(res)
          }).catch(err=>{
            console.log(err)
          })
          Swal.fire('Enregistrées!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Les modifications ne sont pas enregistrées', '', 'info')
        }
      })
    }
  useEffect( () => {
      LivraisonService.get(id).then(res=>{
          console.log(res)
          setData(res.data.data)
      }).catch(err=>{
          console.log(err)
      })
  },[] )
    
  return (
    <div><div>
    <div className="page-content-wrap">
<div className="row">
 <div className="col-md-12">
   <form className="form-horizontal" onSubmit ={onSubmitHandle} >
     <div className="panel panel-default">
       <div className="panel-heading">
         <h3 className="panel-title"><strong> Màj </strong> Livraison</h3>
       </div>
       <div className="panel-body">
         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label"></label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="text" className="form-control" value={data.id_liv} name="id_liv" onChange={onChangehandle}/>
             </div>
             <span className="help-block">Ajouter id_liv</span>
           </div>
         </div>

         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label">Description</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="text" className="form-control" value={data.date} name="date" onChange={onChangehandle} />
             </div>
             <span className="help-block">Ajouter date</span>
           </div>
         </div>

         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label">Description</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="text" className="form-control" value={data.qte_liv} name="qte_liv" onChange={onChangehandle} />
             </div>
             <span className="help-block">Ajouter qte_liv</span>
           </div>
         </div>

         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label">Description</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="text" className="form-control" value={data.prix_total} name="prix_total" onChange={onChangehandle} />
             </div>
             <span className="help-block">Ajouter prix_total</span>
           </div>
         </div>

       </div>
       <div className="panel-footer">
       <Link to="/getAllLiv" className="btn btn-primary">Liste des Livraisons</Link>
         <button className="btn btn-primary pull-right" type="submit">Envoyer</button>
       </div>
     </div>
   </form>
 </div>
</div>
</div>
 </div></div>
  )
}

export default UpdateLiv