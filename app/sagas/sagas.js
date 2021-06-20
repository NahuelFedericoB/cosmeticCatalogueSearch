import { fork } from "redux-saga/effects";

import { fetchCatalogueWatcher } from "../scripts/components/MenuBar/sagas";

function* rootSaga() {
  yield fork(fetchCatalogueWatcher);
}

export default rootSaga;
