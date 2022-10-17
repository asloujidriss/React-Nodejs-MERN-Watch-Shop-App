import http from "./AxiosContext";
const getAll = () => {
  return http.get("/category/getAll");
};
const get = id => {
  return http.get(`/category/getbyId/${id}`);
};
const create = data => {
  return http.post("/category/create",data);
};
const update = (id, data) => {
  return http.put(`/category/update/${id}`,data);
};
const remove = _id => {
  return http.delete(`/category/delete/${_id}`);
};
const findByName = title => {
  return http.get(`/category/getbyName=${title}`);
};
export default {
  getAll,
  get,
  create,
  update,
  remove,
  findByName
};