import { call, delay, put, select, takeLatest } from "redux-saga/effects";

import { FETCH_CATALOGUE } from "../../actionTypes";
import {
  setCatalogueIsLoading,
  setCatalogueIsNotLoading,
  saveCatalogue,
} from "../../actions";
import { getSearchBar } from "../../selectors";
import createStore from "../../../store/store";
import { oneSecond } from "../../constants";

import { fetchCatalogue } from "./services";

import { callFetchCatalogue } from "./sagas";

jest.mock("./services");

describe("callFetchCatalogue saga", () => {
  describe("when the action type is `FETCH_CATALOGUE`", () => {
    it("should call delay with one second", () => {
      const action = {
        type: FETCH_CATALOGUE,
      };
      const saga = callFetchCatalogue(action);
      const step = saga.next();

      expect(step.value).toEqual(delay(oneSecond));
    });

    it("should call `put` with `setCatalogueIsLoading`", () => {
      const saga = callFetchCatalogue();
      saga.next();
      const step = saga.next();

      expect(step.value).toEqual(put(setCatalogueIsLoading()));
    });

    it("should call `call` with `fetchCatalogue` and with `getSearchBar`", () => {
      const saga = callFetchCatalogue();
      saga.next();
      saga.next();
      saga.next();
      const step = saga.next(getSearchBar);

      expect(step.value).toEqual(call(fetchCatalogue, getSearchBar));
    });

    it("should call `put` with `saveCatalogue` with the api response", () => {
      const responseMock = {
        filteredProducts: [],
      };
      const saga = callFetchCatalogue();
      saga.next();
      saga.next();
      saga.next();
      saga.next();
      const step = saga.next(responseMock);

      expect(step.value).toEqual(put(saveCatalogue(responseMock)));
    });

    it("should call `put` with `setCatalogueIsNotLoading`", () => {
      const saga = callFetchCatalogue();
      saga.next();
      saga.next();
      saga.next();
      saga.next();
      saga.next();
      const step = saga.next();

      expect(step.value).toEqual(put(setCatalogueIsNotLoading()));
    });

    describe("after the last step", () => {
      it("should be done", () => {
        const saga = callFetchCatalogue();
        saga.next();
        saga.next();
        saga.next();
        saga.next();
        saga.next();
        saga.next();
        const finalStep = saga.next();

        expect(finalStep.done).toBe(true);
      });
    });
  });
});
