import { ALL_DATA, ALL_TYPE, STATUS, GET_A_Z } from "../actions";
import setFilters from "../selectores/setFilters";
import getItemActive from "../selectores/getItemActive";
import orderAlphabetical from "../selectores/orderAlphabetical";
import { db } from "../utils/db";

const initialState = {
  allData: db,
  data: db,
};

const dataInfo = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DATA:
      return {
        ...state,
        allData: state,
        data: action.payload,
      };
    case ALL_TYPE:
      return {
        ...state,
        allData: [...setFilters(action.payload, state.data)],
      };
    case STATUS:
      return {
        ...state,
        allData: [...getItemActive(action.payload, state.data)],
      };
      case GET_A_Z:
          return{
              ...state,
              allData: [...orderAlphabetical(action.payload,state.data)]
          }
    default:
      return state;
  }
};

export default dataInfo;
