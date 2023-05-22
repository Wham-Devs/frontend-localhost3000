import { screen, render } from "@testing-library/react"
import ConcertGoEdit from "../pages/ConcertGoEdit"
import { BrowserRouter } from "react-router-dom"

describe("<ConcertGoEdit />", () => {
  it("Show the user a list of event cards", () => {
    render(
      <BrowserRouter>
        <ConcertGoEdit />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    const button = screen.getByRole("button", {
      name: /read more/i,
    })
    expect(button).toBeInTheDocument()

    const heading = screen.getByRole("heading", {
      name: /Concert Go/i,
    })
    expect(heading).toBeInTheDocument()

    expect(screen.getByText(/city/i)).toBeInTheDocument()
  })
})
