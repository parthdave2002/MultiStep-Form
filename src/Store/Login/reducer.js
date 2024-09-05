import {
  INSERT_LOGIN,
  INSERT_LOGIN_SUCCESS,
  INSERT_LOGIN_ERROR,

  RESET_INSERT_LOGIN,
  RESET_INSERT_LOGIN_SUCCESS,

  SIGNUP_DATA,
  SIGNUP_DATA_ERROR,
  SIGNUP_DATA_SUCCESS,

  RESET_INSERT_SIGNUP_DATA,
  RESET_INSERT_SIGNUP_DATA_SUCCESS
  } from "./actionType";
  
  const INIT_STATE = {
    Logincode: [],
    signupcode:[],
    error: {},
  };
  
  const Login = (state = INIT_STATE, action) => {
    switch (action.type) {
      case INSERT_LOGIN_SUCCESS:
        switch (action.payload.actionType) {
          case INSERT_LOGIN:
            return {
              ...state,
              Logincode: action.payload.data,
            };
        }
      case INSERT_LOGIN_ERROR:
        switch (action.payload.actionType) {
          case INSERT_LOGIN:
            return {
              ...state,
              error: action.payload,
            };
  
          default:
            return { ...state };
        }

        // Reset Login
        case RESET_INSERT_LOGIN_SUCCESS:
          switch (action.payload.actionType) {
            case RESET_INSERT_LOGIN:
             
              return {
                ...state,
                Logincode: [],
              };
          }

        // Signup
        case SIGNUP_DATA_SUCCESS:
        switch (action.payload.actionType) {
          case SIGNUP_DATA:
            return {
              ...state,
              signupcode: action.payload.data,
            };
        }
        case SIGNUP_DATA_ERROR:
        switch (action.payload.actionType) {
          case SIGNUP_DATA:
            // console.log("CREATE_GROUP_SUCCESS =====>", action.payload);
            return {
              ...state,
              error: action.payload,
            };
  
          default:
            return { ...state };
        }

        // Reset SIGNUP_DATA
        case RESET_INSERT_SIGNUP_DATA_SUCCESS:
          switch (action.payload.actionType) {
            case RESET_INSERT_SIGNUP_DATA:
              return {
                ...state,
                signupcode: [],
              };
        }
  
      default:
        return state;
    }
  };
  
  export default Login;