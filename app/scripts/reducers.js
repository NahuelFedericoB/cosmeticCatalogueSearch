import { combineReducers } from "redux";

import {
  SET_SEARCH_BAR,
  SET_CATALOGUE_IS_LOADING,
  SET_CATALOGUE_IS_NOT_LOADING,
  SAVE_CATALOGUE,
} from "./actionTypes";

import { catalogueInitialState, searchBarInitialState } from "./constants";

const catalogueReducerReducer = (
  state = catalogueInitialState,
  { type = "", catalogue = { ...catalogueInitialState } } = {}
) => {
  switch (type) {
    case SET_CATALOGUE_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case SET_CATALOGUE_IS_NOT_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    case SAVE_CATALOGUE:
      return {
        ...state,
        catalogue: catalogue,
      };

    default:
      return state;
  }
};

const searchBarReducer = (
  state = searchBarInitialState,
  { type = "", searchBar = searchBarInitialState } = {}
) => {
  switch (type) {
    case SET_SEARCH_BAR:
      return {
        ...state,
        searchCriteria: searchBar,
      };

    default: {
      return state;
    }
  }
};

const mainPageReducer = combineReducers({
  catalogue: catalogueReducerReducer,
  searchBar: searchBarReducer,
});

export { mainPageReducer };
