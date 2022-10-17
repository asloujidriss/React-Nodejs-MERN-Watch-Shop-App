import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import ServiceRepService from '../../../Services/ServiceRepService'
import UsersService from '../../../Services/UsersService'

function UpdateService() {
    const navigate=useNavigate()
    const [data,setData]=useState({})
    const [image,setImages]=useState([])
    const [users, setUsers] = useState([])
    const {id}=useParams()
    const onChangehandle=(e)=>{
      setData({
        ...data,
        [e.target.name] : e.target.value
      })
    }
    const onSubmitHandle=(e)=>{
      e.preventDefault()

      const formdata = new FormData()//
  for (let i = 0; i < image.length; i++) {
    formdata.append("image",image[i])
  }
  formdata.append("num_rep",data.num_rep)
  formdata.append("marque",data.marque)
  formdata.append("panne",data.panne)
  formdata.append("user", data.user)
  formdata.append("num_tel",data.num_tel)
  formdata.append("date_estim",data.date_estim)
  formdata.append("etat",data.etat)
      
      
      Swal.fire({
        title: 'Voulez-vous enregistrer les modifications?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Enregistrer',
        denyButtonText: `N'enregistre pas`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate("/getAllServices")
          ServiceRepService.update(id,formdata).then(res=>{
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
    const GetAll = () => {

      UsersService.getAll().then(res => {
        console.log("response >>>>", res)
        setUsers(res.data.data)
      }).catch(err => {
        console.log(err)
      })
    }
  useEffect( () => {
    ServiceRepService.get(id).then(res=>{
          console.log(res)
          setData(res.data.data)
      }).catch(err=>{
          console.log(err)
      })
  },[] )

  const onHandleImage=e=>{
    console.log(e)
    setImages(e.target.files)
  }   
  useEffect(() => {
    GetAll()
  }, [])

  return (
    <div>
        <div>
    <div className="page-content-wrap">
<div className="row">
 <div className="col-md-12">
   <form className="form-horizontal" onSubmit ={onSubmitHandle}>
     <div className="panel panel-default">
       <div className="panel-heading">
         <h3 className="panel-title"><strong> Màj </strong> Service</h3>
       </div>

       <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Num_rep</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" name='num_rep' value={data.num_rep} onChange={onChangehandle}/>
                </div>
                <span className="help-block">ajouter num_rep</span>
              </div>
            </div>


            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Marque</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" name='marque' value={data.marque} onChange={onChangehandle}/>
                </div>
                <span className="help-block">ajouter marque</span>
              </div>
            </div>


            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Panne</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" name='panne' value={data.panne} onChange={onChangehandle}/>
                </div>
                <span className="help-block">ajouter panne</span>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Image</label>
              <div className="col-md-6 col-xs-12">
                <input multiple type="file" className="form-control" name="image"  onChange={onHandleImage}/>
                <span className="help-block">ajouter image</span>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Proprietaire</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <select className="form-control" name='user' onChange={onChangehandle} >
                          <option selected value="">---user---</option>
                          {users.map((item) => {
                            return (
                              <option key={item._id} value={item._id}>{item.nom} {item.prenom}</option>
                            )
                          })}
                        </select>
                </div>
                <span className="help-block">ajouter proprietaire</span>
              </div>
            </div>

              <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Num_tel</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" name='num_tel' value={data.num_tel} onChange={onChangehandle} />
                </div>
                <span className="help-block">ajouter num_tel</span>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Date_estim</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" name='date_estim' value={data.date_estim} onChange={onChangehandle} />
                </div>
                <span className="help-block">ajouter date_estim</span>
              </div>
            </div>
   
            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">etat</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" name='etat' value={data.etat} onChange={onChangehandle} />
                </div>
                <span className="help-block">ajouter etat</span>
              </div>
            </div>

       <div className="panel-footer">
       <Link to="/getAllServices" className="btn btn-primary">Liste des Services</Link>
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

export default UpdateService