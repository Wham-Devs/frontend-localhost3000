import { screen, render } from "@testing-library/react";
import ConcertGoIndex from "../pages/ConcertGoIndex";
import { BrowserRouter } from "react-router-dom";

describe("<ConcertGoIndex />", () => {
  it("Show the user a list of event cards", () => {
    render(
      <BrowserRouter>
        <ConcertGoIndex />
      </BrowserRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: /event list/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /slide 2/i,
      })
    ).toBeInTheDocument();
  });
});
