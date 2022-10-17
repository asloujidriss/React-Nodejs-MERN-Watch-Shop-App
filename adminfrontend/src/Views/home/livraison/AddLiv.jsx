import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LivraisonService from '../../../Services/LivraisonService'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'


const Livraisons = () => {


  const navigate=useNavigate()
  const [data,setData]=useState({})

  const onChangehandle=(e)=>{
    setData({
      ...
      data,
      [e.target.name]:e.target.value
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

        LivraisonService.create(data).then(res=>{
          setData(res.data.data)
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

  return (
 <div>
   
   <div>
       <div className="page-content-wrap">
  <div className="row">
    <div className="col-md-12">
      <form className="form-horizontal" onSubmit ={onSubmitHandle}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title"><strong>Ajouter Livraison</strong></h3>
          </div>
          <div className="panel-body">
            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Id_liv</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" name='id_liv' onChange={onChangehandle}/>
                </div>
                <span className="help-block">ajouter id_liv</span>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Date</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" name='date' onChange={onChangehandle} />
                </div>
                <span className="help-block">ajouter date</span>
              </div>
          </div>

          <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Qte_liv</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" name='qte_liv' onChange={onChangehandle} />
                </div>
                <span className="help-block">ajouter qte_liv</span>
              </div>
          </div>

          <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Prix_total</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" name='prix_total' onChange={onChangehandle} />
                </div>
                <span className="help-block">ajouter prix_total</span>
              </div>
          </div>

          </div>
          <div className="panel-footer">
          <Link to="/getAllLiv" className="btn btn-primary">Liste des livraisons</Link>
            <button className="btn btn-primary pull-right" type="submit">Envoyer</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>

    </div>     

  )
}

export default Livraisons