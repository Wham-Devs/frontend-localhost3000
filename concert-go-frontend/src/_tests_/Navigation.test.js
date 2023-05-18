import React from "react";
import Navigation from "../components/Navigation";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("navigation", () => {
  it("renders Navigation component with logged-out user", () => {
    render(
      <BrowserRouter>
        <Navigation currentUser={null} />
      </BrowserRouter>
    );

    const logoElement = screen.getByAltText("Logo");
    expect(logoElement).toBeInTheDocument();
    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();
    const faqsLink = screen.getByText("FAQs");
    expect(faqsLink).toBeInTheDocument();
    const aboutUsLink = screen.getByText("About Us");
    expect(aboutUsLink).toBeInTheDocument();

    const loginLink = screen.getByText("Log in");
    expect(loginLink).toBeInTheDocument();

    const getStartedLink = screen.getByText("Get Started");
    expect(getStartedLink).toBeInTheDocument();
  });
});
