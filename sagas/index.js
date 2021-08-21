import { all, fork } from "redux-saga/effects";
import axios from "axios";
import goodsSaga from "./goods";
import SaleSaga from "./sale";

axios.defaults.baseURL = "https://mock-api.ssomee.com";
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(goodsSaga)], fork(SaleSaga));
}
