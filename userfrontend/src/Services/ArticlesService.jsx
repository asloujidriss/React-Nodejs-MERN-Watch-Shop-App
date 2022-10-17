import http from "./AxiosContext";
const create = data => {
  return http.post("/articles/createArt",data);
};
const getAll = () => {
  return http.get("/articles/getAllArt");
};

const getbyID = id => {
  return http.get(`/articles/getbyID/${id}`);
};

const getbyPromo = () => {
  return http.get("/articles/getbyPromo");
};


/////////////////Homme/////////////////
const getbygenreH = genre => {
  return http.get("/articles/getbygenreH");
};
const getbytypeMH = type => {
  return http.get("/articles/getbytypeMH");
};
const getbytypeLH = type => {
  return http.get("/articles/getbytypeLH");
};
const getbytypeAH = type => {
  return http.get("/articles/getbytypeAH");
};


/////////////////Femme/////////////////
const getbygenreF = genre => {
  return http.get("/articles/getbygenreF");
};
const getbytypeMF = type => {
  return http.get("/articles/getbytypeMF");
};
const getbytypeLF = type => {
  return http.get("/articles/getbytypeLF");
};
const getbytypeAF = type => {
  return http.get("/articles/getbytypeAF");
};


/////////////////Enfants/////////////////
const getbygenreE = genre => {
  return http.get("/articles/getbygenreE");
};

const getbytypeME = type => {
  return http.get("/articles/getbytypeME");
};
const getbytypeLE = type => {
  return http.get("/articles/getbytypeLE");
};
const getbytypeAE = type => {
  return http.get("/articles/getbytypeAE");
};

// const getbytypeME = type => {
//   return http.get("/articles/getbytypeME");
// };

const update = (id, data) => {
  return http.put(`/articles/updateArt/${id}`,data);
};
const remove = _id => {
  return http.delete(`/articles/deleteArt/${_id}`);
};

export default {
  create,
  getAll,
  getbyID,
  getbyPromo,

//Homme
  getbygenreH,
  getbytypeMH,
  getbytypeLH,
  getbytypeAH,

//Femme
  getbygenreF,
  getbytypeMF,
  getbytypeLF,
  getbytypeAF,
  
//Enfants
  getbygenreE,
  getbytypeME,
  getbytypeLE,
  getbytypeAE,

  update,
  remove
};