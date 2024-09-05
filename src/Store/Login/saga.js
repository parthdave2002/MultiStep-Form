import { call, put, takeEvery } from "redux-saga/effects";
import {
  insertlogin,
  insertloginSuccess,
  insertloginFail,

  resetinsertlogin,
  resetinsertloginSuccess,
  
  signupdatacall,
  signupdatacallSuccess,
  signupdatacallFail,
  
  resetinsertsignupdata,
  resetinsertsignupdataSuccess,

} from "./action";
import {
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
} from "./actionType";

import { LoginApi,SignupApi } from "../../helper/Demo_helper";

function* onInsertLogin({ payload: requstuser }) {
  try {
    const reponse = yield call(LoginApi, requstuser);
    yield put(insertloginSuccess(INSERT_LOGIN, reponse));
  
  } catch (error) {
    yield put(insertloginFail(error));
  }
}

function* onResetInsertLogin() {
    const reponse = yield call(resetinsertlogin);
    yield put(resetinsertloginSuccess(RESET_INSERT_LOGIN, reponse));
 
}

function* onInsertsignup({ payload: requstuser }) {
  try {
    const reponse = yield call(SignupApi, requstuser);
    yield put(signupdatacallSuccess(SIGNUP_DATA, reponse));
  } catch (error) {
    yield put(signupdatacallFail(error));
  }
}

function* onResetInsertsignup() {
  const reponse = yield call(resetinsertsignupdata);
  yield put(resetinsertsignupdata(RESET_INSERT_SIGNUP_DATA, reponse));

}


function* LoginSaga() {
  yield takeEvery(INSERT_LOGIN, onInsertLogin);
  yield takeEvery(RESET_INSERT_LOGIN, onResetInsertLogin);
  yield takeEvery(SIGNUP_DATA, onInsertsignup);
  yield takeEvery(RESET_INSERT_SIGNUP_DATA, onResetInsertsignup);
}

export default LoginSaga;
