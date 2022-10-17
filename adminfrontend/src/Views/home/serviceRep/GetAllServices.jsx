import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ServiceRepService from '../../../Services/ServiceRepService'
import Swal from 'sweetalert2'


const GetAllServices = () => {
  const [services, setService] = useState([])
  const GetAll = () => {
    ServiceRepService.getAll().then(res => {
      console.log("response >>>>", res)
      setService(res.data.data)
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
        ServiceRepService.remove(id).then(res => {
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
              <h3 className="panel-title"><strong>Liste des Services</strong></h3>
            </div>
            <div className="panel-body panel-body-table">
              <div className="table-responsive">
                <table className="table table-bordered table-striped table-actions">
                  <thead>
                    <tr>
                      <th width={50}>id</th>
                      <th width={150}>user</th>
                      <th width={50}>num_rep</th>
                      <th width={80}>marque</th>
                      <th width={120}>panne</th>
                      <th width={100}>image</th>
                      <th width={100}>num_tel</th>
                      <th width={200}>date_estim</th>
                      <th width={100}>etat</th>
                      <th width={100}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((item, index) => {
                      return (<tr id="trow_1">
                        <td className="text-center">{index}</td>
                        <td><strong>{item.user?.nom} {item.user?.prenom}</strong></td>
                        <td>{item.num_rep}</td>
                        <td>{item.marque}</td>
                        <td>{item.panne}</td>
                        <td>{item.image && (
                          <img style={{ height: "80px" }} src={'http://localhost:5010/getImage/' + item.image}
                       />
                        )}</td>
                        <td>{item.num_tel}</td>
                        <td>{item.date_estim}</td>
                        <td>{item.etat}</td>
                        <td>
                          <Link to={`/updateServices/${item._id}`}>
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
          <Link to="/addService" className='btn btn-primary'>Ajouter Service</Link>
        </div>
      </div>

    </div>
  )
}

export default GetAllServices
