import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ArticleService from '../../../Services/ArticleService' 
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'

const Articles = () => {
  const navigate=useNavigate()
  
  const [data,setData]=useState({})
const [image,setImages]=useState([])

  const onChangehandle=(e)=>{
    setData({
      // ... bich nbadlou e data
      ...data,
      [e.target.name]:e.target.value
    })
  }
  
  const onSubmitHandle=(e)=>{
    e.preventDefault()
    const formdata = new FormData()//
  for (let i = 0; i < image.length; i++) {
    formdata.append("image",image[i])
  }
  formdata.append("ref_art",data.ref_art)
  formdata.append("designation",data.designation)
  formdata.append("prix",data.prix)
  formdata.append("description",data.description)
  formdata.append("promotion",data.promotion)
  formdata.append("genre",data.genre)
  formdata.append("type",data.type)


    Swal.fire({
      title: 'Voulez-vous enregistrer les modifications?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Enregistrer',
      denyButtonText: `N'enregistre pas`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        navigate("/getAllArticles")

        ArticleService.create(formdata).then(res=>{
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
const onHandleImage=e=>{
  console.log(e)
  setImages(e.target.files)
}

  return (
    <div>
       <div className="page-content-wrap">
  <div className="row">
    <div className="col-md-12">
      <form className="form-horizontal" onSubmit={onSubmitHandle} >
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title"><strong>Ajouter Article</strong></h3>
          </div>
          <div className="panel-body">
            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Ref_art</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" name='ref_art' value={data.ref_art} onChange={onChangehandle}/>
                </div>
                <span className="help-block">ajouter ref_art</span>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Designation</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" name='designation' value={data.designation} onChange={onChangehandle}/>
                </div>
                <span className="help-block">ajouter designation</span>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Prix</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" name='prix' value={data.prix} onChange={onChangehandle}/>
                </div>
                <span className="help-block">ajouter prix</span>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Description</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" name='description' value={data.description} onChange={onChangehandle} />
                </div>
                <span className="help-block">ajouter description</span>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Genre</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" name='genre' value={data.genre} onChange={onChangehandle} />
                </div>
                <span className="help-block">ajouter genre</span>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Type</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" name='type' value={data.type} onChange={onChangehandle} />
                </div>
                <span className="help-block">ajouter type</span>
              </div>
            </div>



            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Image</label>
              <div className="col-md-6 col-xs-12">
                <input multiple type="file" className="form-control" name="image" value={data.image} onChange={onHandleImage}/>
                <span className="help-block">ajouter image</span>
              </div>
            </div>


            <select style={{width:200, marginLeft:320}} className="form-select" name="promotion" value={data.promotion} onChange={onChangehandle}>
              <option selected value=" ">--choix--</option>
              <option>true</option>
              <option>false</option>
            </select>
            <span style={{marginLeft:320}} className="help-block">promotion</span>

           {/* <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Promotion</label>
              <div className="col-md-6 col-xs-12">
                <select type="text" className="form-select" name="promotion" value={data.promotion} onChange={onChangehandle}>
                <option selected value=" ">--choix--</option>
              <option>true</option>
              <option>false</option>
                <span className="help-block">ajouter promotion</span>
                </select>
              </div>
            </div> */}

          </div>
          
          
        </div>
        

      <div className="panel-footer">
          <Link to="/getAllArticles" className="btn btn-primary">Liste des Articles</Link>
          <button className="btn btn-primary pull-right" type="submit">Envoyer</button>
          </div>
          </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Articles