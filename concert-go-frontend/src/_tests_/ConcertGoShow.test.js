import { screen, render } from "@testing-library/react"
import ConcertGoShow from "../pages/ConcertGoShow"
import { MemoryRouter } from "react-router-dom"
import mockEvents from "../mockEvents"

describe("<ConcertGoShow />", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter initialEntries={["/concertgoshow/1"]}>
        <ConcertGoShow currentEvent={mockEvents} />
      </MemoryRouter>
    )

    const element = screen.getByText(/Loading.../i)
    expect(element).toBeInTheDocument()
  })
})
