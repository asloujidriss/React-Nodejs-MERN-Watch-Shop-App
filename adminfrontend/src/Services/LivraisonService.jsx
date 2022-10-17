import http from "./AxiosContext";
const getAll = () => {
  return http.get("/livraisons/getAll");
};
const get = id => {
  return http.get(`/livraisons/getLivbyId/${id}`);
};
const create = data => {
  return http.post("/livraisons/create",data);
};
const update = (id, data) => {
  return http.put(`/livraisons/updateLiv/${id}`,data);
};
const remove = _id => {
  return http.delete(`/livraisons/deleteLiv/${_id}`);
};
const findByName = title => {
  return http.get(`/livraisons/getLivbyName=${title}`);
};
export default {
  getAll,
  get,
  create,
  update,
  remove,
  findByName
};