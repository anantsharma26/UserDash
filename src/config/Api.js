import axios from "axios";

let axios_request = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 10000,
});

const requestHandler = (request) => {
  request.headers.Authorization = sessionStorage.getItem("token");
  return request;
};

const responseHandler = (response) => {
  if (response.status === 401 || response.status === 404) {
    window.alert("Invalid Request");
  }

  return response;
};

function manageErrorConnection(err) {
  const originalConfig = err.config;
  if (err.response && err.response.status == 404) {
    alert(err.response.data.message);
    return Promise.reject(err);
  } else if (err.response && err.response.status == 403) {
    localStorage.clear();
    alert("Session Expired");
    window.location.replace("/#/login");
    return Promise.reject(err);
  } else {
    return Promise.reject(err);
  }
}

axios_request.interceptors.request.use(
  (request) => requestHandler(request),
  manageErrorConnection
);

axios_request.interceptors.response.use(
  (response) => responseHandler(response),
  manageErrorConnection
);

export default axios_request;
