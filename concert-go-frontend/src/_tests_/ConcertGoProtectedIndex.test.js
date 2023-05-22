import { screen, render } from "@testing-library/react"
import ConcertGoProtectedIndex from "../pages/ConcertGoProtectedIndex"
import { MemoryRouter } from "react-router-dom"

describe("<ConcertGoProtectedIndex />", () => {
  const mockCurrentUser = {
    user_id: 1,
  }
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
    
  ]
  it("renders my events", () => {
    render(
      <MemoryRouter>
        <ConcertGoProtectedIndex
          currentEvent={mockCurrentEvent}
          currentUser={mockCurrentUser}
        />
      </MemoryRouter>
    )

    expect(
      screen.getByRole("heading", {
        name: /artist 1 genre 1/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("button", {
        name: /edit event/i,
      })
    ).toBeInTheDocument()
  })
})
