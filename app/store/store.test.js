import createStore from "./store";

describe("createStore helper", () => {
  it("should create a new store", () => {
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ = jest.fn();
    const store = createStore();

    expect(store.getState).toEqual(expect.any(Function));
    expect(store.dispatch).toEqual(expect.any(Function));
    expect(store.subscribe).toEqual(expect.any(Function));
    expect(store.replaceReducer).toEqual(expect.any(Function));
  });
});
