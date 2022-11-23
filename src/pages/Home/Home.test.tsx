import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, expect, test } from "vitest";
import Home from "./Home";
import store from "@/redux/store";


describe("Home test", () => {
  

  test("Should show add car button", () => {

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(screen.getByText(/Add a new car/i)).toBeDefined();
  });
});
