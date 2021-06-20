import lodashGet from "lodash/get";
import isNull from "lodash/isNull";

export const get = (object, path, defaultValue) => {
  const value = lodashGet(object, path, defaultValue);

  return isNull(value) ? defaultValue : value;
};

const normalizeProducts = ({ filteredProducts = [] }) =>
  filteredProducts.map((product) => ({
    id: get(product, "_id", ""),
    price: get(product, "price", ""),
    image: get(product, "picture", ""),
    name: get(product, "name", ""),
    description: get(product, "about", ""),
    tags: get(product, "tags", []),
  }));

export { normalizeProducts };
