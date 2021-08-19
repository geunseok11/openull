import axios from "axios";
import {
  HOME_REQUEST,
  HOME_SUCCESS,
  HOME_FAILURE,
  LOAD_GOODSINFO_REQUEST,
  LOAD_GOODSINFO_SUCCESS,
  LOAD_GOODSINFO_FAILURE,
  LOAD_GOODSLIST_REQUEST,
  LOAD_GOODSLIST_SUCCESS,
  LOAD_GOODSLIST_FAILURE,
  LOAD_SEARCHLIST_REQUEST,
  LOAD_SEARCHLIST_SUCCESS,
  LOAD_SEARCHLIST_FAILURE,
} from "../reducers/goods";
import { all, fork, call, put, takeLatest, throttle } from "redux-saga/effects";

function homeAPI() {
  console.log("homeAPI");
  return axios.get("/products/all/1?order=date-desc");
}

function searchListAPI(data) {
  console.log("In SAGA, searchListAPI, data : ", data); // search
  return axios.get(`/products/all/1?order=date-desc`);
}

function goodsListAPI(data) {
  console.log("In SAGA, goodsListAPI, data : ", data); //recommendation
  return axios
    .get(`/products/${data.category.id}/${iterator}?order=price-asc`)
    .then((res) => {
      iterator++;
    });
}

function goodsInfoAPI(data) {
  console.log("In SAGA, goodsInfoAPI, data : ", data);
  return axios.get(`/products/${data.prefix}`);
}

function* home() {
  try {
    const result = yield call(homeAPI);
    yield put({
      type: HOME_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: HOME_FAILURE,
      error: err.response.data,
    });
  }
}

// searchList
function* searchList(action) {
  console.log("In SAGA, searchList, action : ", action);
  try {
    const result = yield call(searchListAPI, action.data);
    console.log("In SAGA, searchList, result : ", result);
    yield put({
      type: LOAD_SEARCHLIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_SEARCHLIST_FAILURE,
      error: err.response.data,
    });
  }
}

// goodsList
function* goodsList(action) {
  console.log("In SAGA, goodsList, action : ", action);
  try {
    const result = yield call(goodsListAPI, action.data); // TODO : max params?
    console.log("In SAGA, goodsList, result : ", result);
    yield put({
      type: LOAD_GOODSLIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_GOODSLIST_FAILURE,
      error: err.data,
    });
  }
}

// goodsInfo
function* goodsInfo(action) {
  // console.log("In SAGA, goodsInfo, executes, action : ", String(action.id))
  // console.log("In SAGA, goodsInfo, executes, action : ", action)
  // let data = action.id
  try {
    const result = yield call(goodsInfoAPI, action.id);
    yield put({
      type: LOAD_GOODSINFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_GOODSINFO_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchHome() {
  yield takeLatest(HOME_REQUEST, home);
}

function* watchGoodsList() {
  console.log("In SAGA, goodsList, executes ");
  yield takeLatest(LOAD_GOODSLIST_REQUEST, goodsList);
}

function* watchSearchList() {
  console.log("In SAGA, watchSearchList, executes ");
  yield takeLatest(LOAD_SEARCHLIST_REQUEST, searchList);
}

function* watchGoodsInfo() {
  console.log("In SAGA, goodsInfo, executes ");
  yield takeLatest(LOAD_GOODSINFO_REQUEST, goodsInfo);
}

export default function* goodsSaga() {
  console.log("In GOODS of SAGA, goodsSaga");
  yield all([
    fork(watchHome),
    fork(watchGoodsList),
    fork(watchSearchList),
    fork(watchGoodsInfo),
  ]);
}
