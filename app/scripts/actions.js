import {
  SET_SEARCH_BAR,
  FETCH_CATALOGUE,
  SET_CATALOGUE_IS_LOADING,
  SET_CATALOGUE_IS_NOT_LOADING,
  SAVE_CATALOGUE,
} from "./actionTypes";

export const setSearchBar = (searchBar) => ({
  type: SET_SEARCH_BAR,
  searchBar,
});

export const fetchCatalogue = () => ({
  type: FETCH_CATALOGUE,
});

export const setCatalogueIsLoading = () => ({
  type: SET_CATALOGUE_IS_LOADING,
});

export const setCatalogueIsNotLoading = () => ({
  type: SET_CATALOGUE_IS_NOT_LOADING,
});

export const saveCatalogue = (catalogue) => ({
  type: SAVE_CATALOGUE,
  catalogue,
});
