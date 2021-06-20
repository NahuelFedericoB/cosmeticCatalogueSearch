import "babel-polyfill";
/**
 * The Initial React Setup file
 * ...
 *
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 *
 * == JS
 * All files in here start from this init point for the React Components.
 *
 *
 * Firstly we need to import the React JS Library
 */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import createStore from "../store";
import Menu from "./components/MenuBar/MenuBar";
import Home from "./components/CataloguePage/CataloguePage";

const store = createStore();
/**
 * We can start our initial App here in the main.js file
 */
const MainPage = () => (
  <Provider store={store}>
    <div className="main">
      <Menu />
      <Home />
    </div>
  </Provider>
);

// Render this out
ReactDOM.render(<MainPage />, document.getElementById("root"));
