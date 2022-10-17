import http from "./AxiosContext";
const create = data => {
  return http.post("/commande/create",data);
};
const getAll = () => {
  return http.get("/commande/getAll");
};

export default {
    getAll,
    create,
  };