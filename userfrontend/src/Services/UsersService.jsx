import http from "./AxiosContext";
const getAll = () => {
  return http.get("/users/getAll");
};
const get = _id => {
  return http.get(`/users/getbyId/${_id}`);
};
const create = data => {
  return http.post("/users/register",data);
};
const update = (_id, user) => {
  return http.put(`/users/updateUser/${_id}`,user);
};
const remove = _id => {
  return http.delete(`/users/deleteUser/${_id}`);
};
const findByName = title => {
  return http.get(`/users/getbyName=${title}`);
};
export default {
  getAll,
  get,
  create,
  update,
  remove,
  findByName
};