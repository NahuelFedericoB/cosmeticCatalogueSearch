import React from "react";
import { Provider } from "react-redux";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";

import createStore from "../../../store";
import MenuBar from "./MenuBar";

const renderWithStore = (store) =>
  render(
    <Provider store={store || createStore()}>
      <MenuBar />
    </Provider>
  );

describe("<MenuBar />", () => {
  it("should render correctly", async () => {
    const { asFragment } = renderWithStore();

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("when the user clicks on the search icon", () => {
    it("should show the search bar input", async () => {
      renderWithStore();

      const searchIcon = screen.getByText("search");
      fireEvent.click(searchIcon);

      await waitFor(() => {
        expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
      });
    });
  });

  describe("when the user types the search bar", () => {
    it("should update the search bar value", async () => {
      renderWithStore();

      const searchIcon = screen.getByText("search");
      fireEvent.click(searchIcon);

      await waitFor(() => {
        expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
      });

      const searchInput = screen.getByPlaceholderText("Search...");

      fireEvent.change(searchInput, { target: { value: "shampoo" } });

      expect(searchInput).toHaveValue("shampoo");
    });
  });

  describe("when the user clicks on the close icon", () => {
    it("should hide the search bar input", async () => {
      renderWithStore();

      const searchIcon = screen.getByText("search");
      fireEvent.click(searchIcon);

      await waitFor(() => {
        expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
      });

      const closeIcon = screen.getByText("close");
      fireEvent.click(closeIcon);

      await waitFor(() => {
        expect(screen.queryByText("Search...")).not.toBeInTheDocument();
      });
    });
  });
});
