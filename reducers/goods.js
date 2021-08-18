export const initialState = {
  home: [],
  homeLoading: false,
  homeQnADone: false,
  homeQnAError: null,

  goodsInfo: [],
  goodsList: [],
  searchList: [],
  bucket: [],

  loadSearchListLoading: true, // search list
  loadSearchListDone: false,
  loadSearchListError: null,

  loadGoodsListLoading: false, // goods list
  loadGoodsListDone: false,
  loadGoodsListError: null,

  loadGoodsInfoLoading: true, // goods info
  loadGoodsInfoDone: false,
  loadGoodsInfoError: null,
};

export const HOME_REQUEST = "HOME_REQUEST"; // home
export const HOME_SUCCESS = "HOME_SUCCESS";
export const HOME_FAILURE = "HOME_FAILURE";

export const LOAD_BUCKET_REQUEST = "LOAD_BUCKET_REQUEST"; //  bucket, not yet patch in quantity
export const ADD_BUCKET_REQUEST = "ADD_BUCKET_REQUEST";
export const DELETE_BUCKET_REQUEST = "DELETE_BUCKET_REQUEST";

export const LOAD_GOODSLIST_REQUEST = "LOAD_GOODSLIST_REQUEST"; // goods list
export const LOAD_GOODSLIST_SUCCESS = "LOAD_GOODSLIST_SUCCESS";
export const LOAD_GOODSLIST_FAILURE = "LOAD_GOODSLIST_REQUEST";

export const LOAD_SEARCHLIST_REQUEST = "LOAD_SEARCHLIST_REQUEST"; // search list
export const LOAD_SEARCHLIST_SUCCESS = "LOAD_SEARCHLIST_SUCCESS";
export const LOAD_SEARCHLIST_FAILURE = "LOAD_SEARCHLIST_REQUEST";

export const LOAD_GOODSINFO_REQUEST = "LOAD_GOODSINFO_REQUEST"; // goods Info
export const LOAD_GOODSINFO_SUCCESS = "LOAD_GOODSINFO_SUCCESS";
export const LOAD_GOODSINFO_FAILURE = "LOAD_GOODSINFO_FAILURE";

export const homeToLoad = () => {
  return {
    type: HOME_REQUEST,
  };
};

// recommendation -> goodsList
export const loadGoodsList = (data) => {
  console.log("In REDUCER, loadGoodsList, data : ", data);

  return {
    type: LOAD_GOODSLIST_REQUEST,
    data,
  };
};

// search -> searchList
export const loadSearchList = (data) => {
  console.log("In REDUCER, loadSearchList, data : ", data);
  return {
    type: LOAD_SEARCHLIST_REQUEST,
    data,
  };
};

export const loadGoodsInfo = (id) => {
  // console.log('In REDUCER,  loadGoodsInfo, id : ', id);
  // const ids = id.id;
  return {
    type: LOAD_GOODSINFO_REQUEST,
    id,
    // data:id,
  };
};
export const loadToBucket = () => {
  return {
    type: LOAD_BUCKET_REQUEST,
  };
};
export const addToBucket = (data) => {
  console.log("In REDUCER, addToBucket, data : ", data);
  return {
    type: ADD_BUCKET_REQUEST,
    data,
  };
};
export const deleteToBucket = () => {
  return {
    type: DELETE_BUCKET_REQUEST,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // bucket
    case LOAD_BUCKET_REQUEST:
      return {
        ...state,
      };
    case ADD_BUCKET_REQUEST:
      console.log("In REDUCER, ADD_BUCKET_REQUEST, action : ", action.data);
      return {
        ...state,
        bucket: [action.data, ...state.bucket],
      };
    case DELETE_BUCKET_REQUEST:
      console.log("In REDUCER, DELETE_BUCKET_REQUEST, action : ", action);
      return {
        ...state,
        // count: state.count - 1,
      };

    // home rendering
    case HOME_REQUEST:
      // console.log("In REDUX, HOME_REQUEST, executes")
      return {
        ...state,
        homeLoading: true, // home rendering
        homeQnADone: false,
        homeQnAError: null,
      };
    case HOME_SUCCESS:
      console.log("In REDUX, HOME_SUCCESS, action : ", action);
      return {
        ...state,
        homeLoading: false, // home rendering
        homeQnADone: true,
        home: action.data,
      };
    case HOME_FAILURE:
      return {
        ...state,
        homeLoading: false, // home rendering
        homeQnAError: action.error,
      };

    //

    // load goods list
    case LOAD_GOODSLIST_REQUEST:
      console.log("In REDUX, LOAD_GOODSLIST_REQUEST, action : ", action);
      return {
        ...state,
        loadGoodsListLoading: true, // goods list
        loadGoodsListDone: false,
        loadGoodsListError: null,
      };
    case LOAD_GOODSLIST_SUCCESS:
      console.log("In REDUX, LOAD_GOODSLIST_SUCCESS, action : ", action);
      return {
        ...state,
        loadGoodsListLoading: false, // goods list
        loadGoodsListDone: true,
        goodsList: [action.data, ...state.goodsList],
      };
    case LOAD_GOODSLIST_FAILURE:
      console.log("In REDUX, LOAD_GOODSLIST_FAILURE, action : ", action);
      return {
        ...state,
        loadGoodsListLoading: false,
        loadGoodsListError: action.error, // home rendering
      };

    // search list
    case LOAD_SEARCHLIST_REQUEST:
      console.log("In REDUX, LOAD_SEARCHLIST_REQUEST, action : ", action);
      return {
        ...state,
        loadSearchListLoading: true, // search list
        loadSearchListDone: false,
        loadSearchListError: null,
      };
    case LOAD_SEARCHLIST_SUCCESS:
      console.log("In REDUX, LOAD_SEARCHLIST_SUCCESS, action : ", action);
      return {
        ...state,
        loadSearchListLoading: false, // goods list
        loadSearchListDone: true,
        searchList: [action.data, ...state.searchList],
      };
    case LOAD_SEARCHLIST_FAILURE:
      console.log("In REDUX, LOAD_SEARCHLIST_FAILURE, action : ", action);
      return {
        ...state,
        loadSearchListLoading: false,
        loadSearchListError: action.error,
      };

    // load goodsInfo rendering
    case LOAD_GOODSINFO_REQUEST:
      // console.log("In REDUX, LOAD_GOODSINFO_REQUEST, executes, action : ", action)
      return {
        ...state,
        loadGoodsInfoLoading: true, // goods info
        loadGoodsInfoDone: false,
        loadGoodsInfoError: null,
      };
    case LOAD_GOODSINFO_SUCCESS:
      console.log("In REDUX, LOAD_GOODSINFO_SUCCESS, action : ", action);
      return {
        ...state,
        loadGoodsInfoLoading: false, // goods info
        loadGoodsInfoDone: true,
        goodsInfo: action.data,
      };
    case LOAD_GOODSINFO_FAILURE:
      // console.log("In REDUX, LOAD_GOODSINFO_FAILURE, ")
      return {
        ...state,
        homeLoading: false, // home rendering
        homeQnAError: action.error,
      };

    default:
      return state;
  }
};
//
export default reducer;
