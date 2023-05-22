import { render, screen } from "@testing-library/react";

import ConcertGoFAQ from "../pages/ConcertGoFAQ";
import { BrowserRouter } from "react-router-dom";

describe("<ConcertGoFAQ />", () => {
  it("It should show user FAQ page", () => {
    render(
      <BrowserRouter>
        <ConcertGoFAQ />
      </BrowserRouter>
    );

    const heading = screen.getByRole("heading", { name: /FAQs/i });
    expect(heading).toBeInTheDocument();
  });
});
