import axios from "axios";
import {
  POST_SALE_REQUEST,
  POST_SALE_SUCCESS,
  POST_SALE_FAILURE,
} from "../reducers/sale";
import { all, fork, call, put, takeLatest, throttle } from "redux-saga/effects";

console.log("In saga, at 0 : ", "saga executes");

function PostSaleAPI(data) {
  console.log("In goods of SAGA 4, : ", data);
  return axios.post(`/products/${data.prefix}`, data);
}

function* PostSale(action) {
  console.log("In goods of SAGA, at 3 : ", action);

  try {
    const result = yield call(PostSaleAPI, action.data);
    yield put({
      type: POST_SALE_SUCCESS,
      data: result.text,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: POST_SALE_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchPostSale() {
  yield takeLatest(POST_SALE_REQUEST, PostSale);
}

export default function* SaleSaga() {
  yield all([fork(watchPostSale)]);
}
