import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import UsersService from "../../../Services/UsersService"
import Swal from 'sweetalert2'


const GetAllUsers = () => {
  const [users, setUsers] = useState([])

  const GetAll = () => {

    UsersService.getAll().then(res => {
      console.log("response >>>>", res)
      setUsers(res.data.data)
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
        UsersService.remove(id).then(res => {
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
              <h3 className="panel-title"><strong>Liste des Utilisateurs</strong></h3>
            </div>
            <div className="panel-body panel-body-table">
              <div className="table-responsive">
                <table className="table table-bordered table-striped table-actions">
                  <thead>
                    <tr>
                      <th width={50}>id</th>
                      <th width={80}>CIN</th>
                      <th width={100}>email</th>
                      <th width={50}>nom</th>
                      <th width={50}>prenom</th>
                      <th width={50}>sexe</th>
                      <th width={50}>tel1</th>
                      <th width={50}>tel2</th>
                      <th width={50}>adresse</th>
                      <th width={50}>codepostal</th>
                      <th width={50}>date_creation_compte</th>
                      <th width={50}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((item, index) => {

                      return (<tr id="trow_1">
                        <td className="text-center">{index}</td>
                        <td><strong>{item.CIN}</strong></td>
                        <td>{item.email}</td>
                        <td>{item.nom}</td>
                        <td>{item.prenom}</td>
                        <td>{item.sexe}</td>
                        <td>{item.tel1}</td>
                        <td>{item.tel2}</td>
                        <td>{item.adresse}</td>
                        <td>{item.codepostal}</td>
                        <td>{item.date_creation_compte}</td>
                        <td>
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
        </div>
      </div>
    </div>
  )
}

export default GetAllUsers