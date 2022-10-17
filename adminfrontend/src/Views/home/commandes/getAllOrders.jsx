import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CommandeService from "../../../Services/CommandeService"
import Swal from 'sweetalert2'


const GetAllOrders = () => {
  const [orders, setOrders] = useState([])

  const GetAll = () => {

    CommandeService.getAll().then(res => {
      console.log("response >>>>", res)
      setOrders(res.data.data)
    }).catch(err => {
      console.log(err)
    })
  }
  useEffect(() => {
    GetAll()
  }, [])


  const onDelete = (id) => {

    Swal.fire({
      title: 'Etes-vous sûr?',
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprime-le!'
    }).then((result) => {
      if (result.isConfirmed) {
        CommandeService.remove(id).then(res => {
          GetAll()

        })
        Swal.fire(
          'Supprimé!',
          'Votre fichier a été supprimé.',
          'success'
        )
      }
    })
  }

  return (

    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title"><strong>Liste des Commandes</strong></h3>
            </div>
            <div className="panel-body panel-body-table">
              <div className="table-responsive">
                <table className="table table-bordered table-striped table-actions">
                  <thead>
                    <tr>
                      <th width={50}><center>id</center></th>
                      <th width={80}>client</th>
                      <th width={50}>product</th>
                      <th width={50}>prix_total</th>
                      <th width={50}>status</th>
                      <th width={50}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((item, index) => {

                      return (<tr id="trow_1">
                        <td className="text-center">{index}</td>
                        <td><strong>{item.client.nom} {item.client.prenom}</strong></td>
                        <td>{item.products.map(p=>{
                          return(
                            <>
                            <div style={{display:"flex", flexDirection:"column" }} ></div>
                            {p.ref_art}
                            </>
                          )
                        })}</td>
                        <td>{item.total}</td>
                        <td>{
                        item.livred === 1 ? "en attende" : "delivred" 
                        }</td>
                        <td>
                          <Link to={`/updateOrders/${item._id}`}>
                            <button className="btn btn-default btn-rounded btn-sm"><span className="fa fa-pencil" /></button>
                          </Link>
                          <button className="btn btn-danger btn-rounded btn-sm" onClick={() => onDelete(item._id)}><span className="fa fa-times" /></button>
                        </td>
                      </tr>
                      )
                    })
                  }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Link to="/addOdrers" className='btn btn-primary'>Ajouter Commande</Link>
        </div>
      </div>

    </div>
  )
}

export default GetAllOrders