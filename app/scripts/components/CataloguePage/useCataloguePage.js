import { useSelector } from "react-redux";

import { getCatalogue, getCatalogueIsLoading } from "../../selectors";

const useCataloguePage = () => {
  const catalogue = useSelector(getCatalogue);
  const isLoading = useSelector(getCatalogueIsLoading);

  return {
    catalogue,
    isLoading,
  };
};

export default useCataloguePage;
