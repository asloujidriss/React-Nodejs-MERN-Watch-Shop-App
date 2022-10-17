import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ArticleService from '../../../Services/ArticleService'
import Swal from 'sweetalert2'


const GetAllArt = () => {
  const [articles, setArt] = useState([])
  const GetAll = () => {
    ArticleService.getAll().then(res => {
      console.log("response >>>>", res)
      setArt(res.data.data)
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
        ArticleService.remove(id).then(res => {
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
              <h3 className="panel-title"><strong>Liste des Articles</strong></h3>
            </div>
            <div className="panel-body panel-body-table">
              <div className="table-responsive">
                <table className="table table-bordered table-striped table-actions">
                  <thead>
                    <tr>
                      <th width={50}>id</th>
                      <th width={80}>ref_art</th>
                      <th width={100}>designation</th>
                      <th width={100}>prix</th>
                      <th width={100}>image</th>
                      <th width={200}>description</th>
                      <th width={200}>genre</th>
                      <th width={200}>type</th>
                      <th width={100}>promotion</th>
                      <th width={100}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {articles.map((item, index) => {
                      return (<tr id="trow_1">
                        <td className="text-center">{index}</td>
                        <td><strong>{item.ref_art}</strong></td>
                        <td>{item.designation}</td>
                        <td>{item.prix}</td>
                        <td>{item.image && (
                          <img style={{ height: "80px" }} src={'http://localhost:5010/getImage/' + item.image}
                       />
                        )}</td>
                        <td>{item.description}</td>
                        <td>{item.genre}</td>
                        <td>{item.type}</td>
                        <td>{item.promotion.toString()}</td>
                        <td>
                          <Link to={`/UpdateArticles/${item._id}`}>
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
          <Link to="/addArticles" className='btn btn-primary'>Ajouter Articles</Link>
        </div>
      </div>

    </div>
  )
}

export default GetAllArt