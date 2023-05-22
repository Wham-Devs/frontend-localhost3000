import { screen, render } from "@testing-library/react";
import ConcertGoShow from "../pages/ConcertGoShow";
import { MemoryRouter } from "react-router-dom";

describe("<ConcertGoShow />", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter initialEntries={["/concertgoshow/1"]}>
        <ConcertGoShow />
      </MemoryRouter>
    );

    const element = screen.getByText(/Loading.../i);
    expect(element).toBeInTheDocument();
  });
});
