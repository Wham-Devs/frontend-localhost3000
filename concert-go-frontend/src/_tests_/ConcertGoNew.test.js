import { screen, render } from "@testing-library/react";
import ConcertGoNew from "../pages/ConcertGoNew";
import { MemoryRouter } from "react-router-dom";

describe("<ConcertGoNew />", () => {
  const mockCurrentUser = {
    user_id: 1,
  };
  const mockCurrentEvent = [
    {
      currentEvent: "Event 1",
      city: "City 1",
      state: "State 1",
      venue: "Venue 1",
      artist: "Artist 1",
      date: "Date 1",
      show_time: "Time 1",
      genre: "Genre 1",
      images: "image_url_1",
      id: 1,
    },
    // Add more mock events as needed
  ];
  it("renders new event form", () => {
    render(
      <MemoryRouter>
        <ConcertGoNew
          currentEvent={mockCurrentEvent}
          currentUser={mockCurrentUser}
        />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: /create a new event:/i,
      })
    ).toBeInTheDocument();
  });
});
