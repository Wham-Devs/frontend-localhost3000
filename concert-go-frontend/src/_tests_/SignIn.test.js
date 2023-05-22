import { render, screen } from "@testing-library/react";
import SignIn from "../components/SignIn";
import { BrowserRouter } from "react-router-dom";

describe("<SignIn/>", () => {
  it("renders for the user", () => {
    render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    );
screen.logTestingPlaygroundURL()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    expect(
      screen.getByRole("heading", {
        name: /concert go/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /login/i,
      })
    ).toBeInTheDocument();
  });
});
