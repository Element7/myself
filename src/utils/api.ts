/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
import axios, { AxiosPromise, AxiosRequestConfig } from "axios";
import _get from "lodash/get";
import queryString from "query-string";

const host = process.env.REACT_APP_API_URL;
const key = process.env.REACT_APP_API_KEY;
const customAxios = axios.create({
  baseURL: host,
  timeout: 60000,
});

const createApiUrl = (pathArr: string[], query?: Map<string, any>) => {
  let queryUrl = `${host}/${pathArr.filter((item) => !!item).join("/")}`;
  if (query) {
    queryUrl += "?";
    const obj = Object.fromEntries(query);
    const stringified = queryString.stringify(obj);
    if (stringified.length) queryUrl += `${stringified}`;
  }
  console.log(queryUrl);
  return queryUrl;
};
customAxios.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    config.headers["x-api-key"] = key;
    console.log(config);
    return config;
  },
  (error) => Promise.reject(error)
);

customAxios.interceptors.response.use(
  (response) => response,
  (error) => {
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
  getBreedsList(limit: number, page: number): AxiosPromise<any> {
    return customAxios({
      method: "get",
      url: createApiUrl(
        ["breeds"],
        new Map([
          ["limit", limit],
          ["page", page],
        ])
      ),
    });
  },
};

export default api;
