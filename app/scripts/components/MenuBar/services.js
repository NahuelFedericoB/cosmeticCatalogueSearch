import { catalogueUrl } from "../../constants";

import { normalizeProducts } from "./normalizers";

const fetchCatalogue = (searchBar = "") => {
  try {
    const response = fetch(`${catalogueUrl}${searchBar}`)
      .then((response) => response.json())
      .then((data) => normalizeProducts(data));

    return response;
  } catch (e) {
    return normalizeProducts({});
  }
};

export { fetchCatalogue };
