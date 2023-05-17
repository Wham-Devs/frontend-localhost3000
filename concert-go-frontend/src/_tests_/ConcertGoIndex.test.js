import { screen, render } from "@testing-library/react"
import ConcertGoIndex from "../pages/ConcertGoIndex"
import { BrowserRouter } from "react-router-dom"
import mockEvents from "../mockEvents"

describe("<ConcertGoIndex />", () => {
  it("Show the user a list of event cards", () => {
    render(
      <BrowserRouter>
        <ConcertGoIndex />
      </BrowserRouter>
    )

    expect(screen.getByText("Event List")).toBeInTheDocument()
  })
})
