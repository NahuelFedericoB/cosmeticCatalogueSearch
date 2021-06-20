/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import { useDispatch } from "react-redux";

const useAction = (action) => {
  const dispatch = useDispatch();

  return useCallback((params) => dispatch(action(params)), [dispatch]);
};

export default useAction;
