import { all, fork } from "redux-saga/effects";
import LoginSaga from "./Login/saga";

export default function* rootSaga() {
  yield all([
    //public
    fork(LoginSaga),
  ]);
}