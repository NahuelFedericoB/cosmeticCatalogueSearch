import { normalizeProducts } from "./normalizers";

describe("normalizeProducts", () => {
  it("should normalize the data from the service", () => {
    const serviceResponse = {
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

    const normalizedResponse = [
      {
        id: "001",
        price: "20.00",
        image: "/img/products/N0CA_430.png",
        name: "Damage Reverse Oil Conditioner",
        description:
          "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
        tags: ["ojon", "oil", "conditioner"],
      },
      {
        id: "002",
        price: "22.00",
        image: "/img/products/N0EN01_430.png",
        name: "Volume Advance Conditioner",
        description:
          "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
        tags: ["ojon", "conditioner"],
      },
      {
        id: "003",
        price: "30.00",
        image: "/img/products/N0EY01_430.png",
        name: "Volume Advance Shampoo",
        description:
          "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
        tags: ["ojon", "shampoo"],
      },
    ];

    expect(normalizeProducts(serviceResponse)).toEqual(normalizedResponse);
  });

  describe("when there are missing keys", () => {
    it("should normalize the data from the service with the default values", () => {
      const serviceResponse = {
        filteredProducts: [
          {
            about:
              "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
            tags: ["ojon", "oil", "conditioner"],
          },
        ],
      };

      const normalizedResponse = [
        {
          id: "",
          price: "",
          image: "",
          name: "",
          description:
            "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
          tags: ["ojon", "oil", "conditioner"],
        },
      ];

      expect(normalizeProducts(serviceResponse)).toEqual(normalizedResponse);
    });
  });

  describe("when there are nullish", () => {
    it("should normalize the data from the service with the default values", () => {
      const serviceResponse = {
        filteredProducts: [
          {
            _id: null,
            isActive: null,
            price: null,
            picture: null,
            name: null,
            about: null,
            tags: null,
          },
        ],
      };

      const normalizedResponse = [
        {
          id: "",
          price: "",
          image: "",
          name: "",
          description: "",
          tags: [],
        },
      ];

      expect(normalizeProducts(serviceResponse)).toEqual(normalizedResponse);
    });
  });

  describe("when there are NOT data", () => {
    it("should return an EMPTY array", () => {
      expect(normalizeProducts({})).toEqual([]);
    });
  });
});
