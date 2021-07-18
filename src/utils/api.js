import axios from "axios";
import queryString from "query-string";
import _get from "lodash/get";

const host = process.env.REACT_APP_API_URL;

const customAxios = axios.create({
  baseURL: host,
  timeout: 60000,
});

// const authorizationHeader = token => ({
//   Authorization: `Bearer ${token}`
// });

const createApiUrl = (pathArr, query) => {
  const stringified = queryString.stringify(query);
  let queryUrl = `${host}/${pathArr.filter((item) => !!item).join("/")}`;
  if (stringified.length) queryUrl += "?" + stringified;
  return queryUrl;
};

customAxios.interceptors.request.use(
  (config) => {
    if (!config.data) {
      config.data = {};
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

customAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status) {
      const statusCode = error.response.status || error.response.statusCode;
      if (statusCode === 401 || statusCode === 403) {
        alert("You are not authorized");
      } else {
        alert(
          `Error occured: ${
            _get(error.response, "data.message") || error.response.statusText
          }`
        );
      }
    } else {
      alert("Unexpected error occured");
      console.log("Error", error.message);
    }
    return Promise.reject(error);
  }
);

const api = {
  customAxios,
  getExample(arg1, arg2) {
    return customAxios({
      method: "get",
      url: createApiUrl(["example", arg1, "example2", arg2, "something"]),
    });
  },
};

export default api;
