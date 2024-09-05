import  {
  INSERT_LOGIN,
  INSERT_LOGIN_SUCCESS,
  INSERT_LOGIN_ERROR,

  RESET_INSERT_LOGIN,
  RESET_INSERT_LOGIN_ERROR,
  RESET_INSERT_LOGIN_SUCCESS,

  SIGNUP_DATA,
  SIGNUP_DATA_ERROR,
  SIGNUP_DATA_SUCCESS,

  RESET_INSERT_SIGNUP_DATA,
  RESET_INSERT_SIGNUP_DATA_SUCCESS

} from "./actionType"
  
    export const insertlogin = (requserdata) => ({
      type: INSERT_LOGIN,
      payload: requserdata
    });
    
    export const insertloginSuccess = (actionType,data) => ({
      type: INSERT_LOGIN_SUCCESS,
      payload: {actionType,data},
    });
    
    export const insertloginFail = (actionType,error) => ({
      type: INSERT_LOGIN_ERROR,
      payload: {actionType,error},
    });

    // Reset Login
    export const resetinsertlogin = (requserdata) => ({
      type: RESET_INSERT_LOGIN,
      payload: requserdata
    });
    
    export const resetinsertloginSuccess = (actionType,data) => ({
      type: RESET_INSERT_LOGIN_SUCCESS,
      payload: {actionType,data},
    });

// SIGNUP_DATA
    export const signupdatacall = (requserdata) => ({
      type: SIGNUP_DATA,
      payload: requserdata
    });
    
    export const signupdatacallSuccess = (actionType,data) => ({
      type: SIGNUP_DATA_SUCCESS,
      payload: {actionType,data},
    });
    
    export const signupdatacallFail = (actionType,error) => ({
      type: SIGNUP_DATA_ERROR,
      payload: {actionType,error},
    });

    // Reset SIGNUP_DATA
    export const resetinsertsignupdata= (requserdata) => ({
      type: RESET_INSERT_SIGNUP_DATA,
      payload: requserdata
    });
    
    export const resetinsertsignupdataSuccess = (actionType,data) => ({
      type: RESET_INSERT_SIGNUP_DATA_SUCCESS,
      payload: {actionType,data},
    });