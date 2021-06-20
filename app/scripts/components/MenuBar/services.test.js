import { normalizeProducts } from "./normalizers";
import { fetchCatalogue } from "./services";

const mockFetchPromise = {
  filteredProducts: [
    {
      _id: "001",
      isActive: "true",
      price: "20.00",
      picture: "/img/products/N0CA_430.png",
      name: "Damage Reverse Oil Conditioner",
      about:
        "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
      tags: ["ojon", "oil", "conditioner"],
    },
    {
      _id: "002",
      isActive: "true",
      price: "22.00",
      picture: "/img/products/N0EN01_430.png",
      name: "Volume Advance Conditioner",
      about:
        "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
      tags: ["ojon", "conditioner"],
    },
    {
      _id: "003",
      isActive: "true",
      price: "30.00",
      picture: "/img/products/N0EY01_430.png",
      name: "Volume Advance Shampoo",
      about:
        "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
      tags: ["ojon", "shampoo"],
    },
  ],
};

const mockSucces = () =>
  (global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockFetchPromise),
    })
  ));

const mockReject = () => {
  global.fetch.mockClear();
  delete global.fetch;

  global.fetch = jest.fn(() => Promise.reject);
};

describe("fetchCatalogue", () => {
  describe("when the api call resolve succefully", () => {
    it("should return the data normalized", async () => {
      mockSucces();
      const response = await fetchCatalogue();

      expect(response).toEqual(normalizeProducts(mockFetchPromise));
    });
  });

  describe("when the api call fails", () => {
    it("should return and EMPTY array", async () => {
      mockReject();
      const response = await fetchCatalogue();

      expect(response).toEqual([]);
    });
  });
});
