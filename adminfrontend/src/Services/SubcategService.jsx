import http from "./AxiosContext";
const getAll = () => {
  return http.get("/subcategory/getAll");
};
const get = id => {
  return http.get(`/subcategory/getbyId/${id}`);
};
const create = data => {
  return http.post("/subcategory/create",data);
};
const update = (id, data) => {
  return http.put(`/subcategory/update/${id}`,data);
};
const remove = _id => {
  return http.delete(`/subcategory/delete/${_id}`);
};
const findByName = title => {
  return http.get(`/subcategory/getbyName=${title}`);
};
export default {
  getAll,
  get,
  create,
  update,
  remove,
  findByName
};