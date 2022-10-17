import React, { useEffect,useState  } from 'react'
import { Link } from 'react-router-dom'
import LivraisonService from '../../../Services/LivraisonService'
import Swal from 'sweetalert2'


const GetAllLiv = () => {
  
const [livraisons, setLivraisons]=useState([])

const getAll=()=>{

  LivraisonService.getAll().then(res=>{
    console.log("response>>>>",res)
    setLivraisons(res.data.data)
  }).catch(err=>{
    console.log(err)
  })

}
useEffect(() => {
 getAll()
},[])

const onDelete=(id)=>{

  Swal.fire({
    title: 'Etes-vous sûr ?',
    text: "Vous ne pourrez pas revenir en arrière!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085D6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, supprime-le!'
  }).then((result) => {
    if (result.isConfirmed) {
      LivraisonService.remove(id).then(res=>{
        getAll()
        
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
        <h3 className="panel-title"><strong>Liste des Livraisons</strong></h3>
      </div>
      <div className="panel-body panel-body-table">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-actions">
          <thead>
                    <tr>
                      <th width={50}><center>id</center></th>
                      <th width={80}>id_liv</th>
                      <th width={100}>date</th>
                      <th width={50}>qte_liv</th>
                      <th width={50}>prix_total</th>
                      <th width={50}>Actions</th>
                    </tr>
                  </thead>
            <tbody>                                            
              {livraisons.map((item,index)=>{

                return (
                <tr id="trow_1">
                <td className="text-center">{index}</td>
                <td><strong>{item.id_liv}</strong></td>
                <td>{item.date}</td>
                <td>{item.qte_liv}</td>
                <td>{item.prix_total}</td>
                
                <td>
                  
                  <Link to = {`/updateLiv/${item._id}`}>
                  <button className="btn btn-default btn-rounded btn-sm"><span className="fa fa-pencil" /></button>
                    </Link>
                  <button className="btn btn-danger btn-rounded btn-sm" onClick={()=>onDelete(item._id)}><span className="fa fa-times" /></button>
                </td>
              </tr>
              )
              }
              )}
                                                   
            </tbody>
          </table>
        </div>                                
      </div>
    </div> 
    <Link to="/addLiv" className='btn btn-primary'>Ajouter Livraison</Link> 
  </div>
</div>

    </div>
  )
}

export default GetAllLiv