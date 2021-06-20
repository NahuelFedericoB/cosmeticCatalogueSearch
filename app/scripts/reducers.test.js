import {
  SET_SEARCH_BAR,
  SET_CATALOGUE_IS_LOADING,
  SET_CATALOGUE_IS_NOT_LOADING,
  SAVE_CATALOGUE,
} from "./actionTypes";
import { mainPageReducer } from "./reducers";
import { catalogueInitialState, searchBarInitialState } from "./constants";

const reducerInitialState = {
  catalogue: catalogueInitialState,
  searchBar: searchBarInitialState,
};

describe("Main Page Reducer", () => {
  it("should initialize correctly", () => {
    const state = mainPageReducer();

    expect(state).toEqual(reducerInitialState);
  });

  describe("when NO action is passed in", () => {
    it("should return the default state", () => {
      const state = mainPageReducer();

      expect(state).toEqual(reducerInitialState);
    });
  });

  describe("when the action passed is `SET_CATALOGUE_IS_LOADING`", () => {
    it("should set `catalogue` `isLoading` in true", () => {
      const state = mainPageReducer(undefined, {
        type: SET_CATALOGUE_IS_LOADING,
      });
      const expectedState = {
        catalogue: {
          ...reducerInitialState.catalogue,
          isLoading: true,
        },
      };

      expect(state).toEqual(expect.objectContaining(expectedState));
    });
  });

  describe("when the action passed is `SET_CATALOGUE_IS_NOT_LOADING`", () => {
    it("should set `catalogue` `isLoading` in false", () => {
      const state = mainPageReducer(undefined, {
        type: SET_CATALOGUE_IS_NOT_LOADING,
      });
      const expectedState = {
        catalogue: {
          ...reducerInitialState.catalogue,
          isLoading: false,
        },
      };

      expect(state).toEqual(expect.objectContaining(expectedState));
    });
  });

  describe("when the action passed is `SAVE_CATALOGUE`", () => {
    it("should save the visits list", () => {
      const catalogueList = [
        {
          id: "001",
          price: "20.00",
          image: "/img/products/N0CA_430.png",
          name: "Damage Reverse Oil Conditioner",
          description:
            "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
          tags: ["ojon", "oil", "conditioner"],
        },
      ];
      const state = mainPageReducer(undefined, {
        type: SAVE_CATALOGUE,
        catalogue: catalogueList,
      });

      expect(state.catalogue).toEqual(
        expect.objectContaining({ catalogue: catalogueList })
      );
    });
  });
});
