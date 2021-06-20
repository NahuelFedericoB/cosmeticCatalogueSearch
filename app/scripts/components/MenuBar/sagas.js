import { call, delay, put, select, takeLatest } from "redux-saga/effects";

import { FETCH_CATALOGUE } from "../../actionTypes";
import {
  setCatalogueIsLoading,
  setCatalogueIsNotLoading,
  saveCatalogue,
} from "../../actions";
import { getSearchBar } from "../../selectors";
import { oneSecond } from "../../constants";

import { fetchCatalogue } from "./services";

function* callFetchCatalogue() {
  yield delay(oneSecond);

  yield put(setCatalogueIsLoading());
  const searchBar = yield select(getSearchBar);
  const response = yield call(fetchCatalogue, searchBar);
  yield put(saveCatalogue(response));
  yield put(setCatalogueIsNotLoading());
}

function* fetchCatalogueWatcher() {
  yield takeLatest([FETCH_CATALOGUE], callFetchCatalogue);
}

export { fetchCatalogueWatcher, callFetchCatalogue };
