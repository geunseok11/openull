export const initialState = {
  sale: [],

  saleLoding: false,
  saleError: null,
  saleDone: false,
};

export const POST_SALE_REQUEST = "POST_SALE_REQUEST";
export const POST_SALE_SUCCESS = "POST_SALE_SUCCESS";
export const POST_SALE_FAILURE = "POST_SALE_FAILURE";

export const saleAction = (data) => {
  console.log("saleAction :", data);
  return { type: POST_SALE_REQUEST, data };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_SALE_REQUEST:
      return {
        ...state,
        saleLoding: true,
        saleError: null,
        saleDone: false,
      };
    case POST_SALE_SUCCESS:
      return {
        ...state,
        saleLoding: false,
        data: action.data,
        saleDone: true,
      };

    case POST_SALE_FAILURE:
      return {
        ...state,
        saleLoding: false,
        saleError: action.data,
        saleDone: false,
      };
    default:
      return state;
  }
};

export default reducer;
