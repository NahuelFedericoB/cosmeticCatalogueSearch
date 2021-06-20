import { useState } from "react";

import { fetchCatalogue, setSearchBar } from "../../actions";
import useAction from "../../useAction";

const useMenuBar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const dispatchSetSearchBar = useAction(setSearchBar);
  const dispatchFetchCatalogue = useAction(fetchCatalogue);

  const handleSearchBar = (isVisible) => setShowSearchBar(isVisible);

  const handleFilterChange = (value) => {
    dispatchSetSearchBar(value);
    dispatchFetchCatalogue();
  };

  return {
    showSearchBar,
    handleSearchBar,
    handleFilterChange,
  };
};

export default useMenuBar;
