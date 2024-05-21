import axios from "axios";

const goitApi = axios.create({
  baseURL: "https://connections-api.herokuapp.com/",
});

export default goitApi;

export const setAuthToken = (token) => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthToken = () => {
  goitApi.defaults.headers.common.Authorization = "";
};
