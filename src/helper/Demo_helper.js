import { useEffect } from "react";
import { APIClient, setAuthorization } from "./api_helper";
import * as url from "./url_helper";
import axios from "axios";

const api = new APIClient();

// Gets the logged in user data from local session
export const getLoggedInUser = () => {
  const user = localStorage.getItem("authUser");

  if (user) {
    return JSON.parse(user);
  }
  return null;
};

if (localStorage.getItem("token")) {
  const users = localStorage.getItem("token");
  setAuthorization(users);
}

// //is user is logged in
export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

// Register Method
export const postJwtRegister = (url, data) => {
  return api.create(url, data).catch((err) => {
    var message;
    if (err.response && err.response.status) {
      switch (err.response.status) {
        case 404:
          message = "Sorry! the page you are looking for could not be found";
          break;
        case 500:
          message =
            "Sorry! something went wrong, please contact our support team";
          break;
        case 401:
          message = "Invalid credentials";
          break;
        default:
          message = err[1];
          break;
      }
    }
    throw message;
  });
};


//Login
export const LoginApi = (requserdata) => api.create(url.INSERT_LOGIN, requserdata);
export const  SignupApi = (requserdata) => api.get(url.SIGNUP_DATA, requserdata);
