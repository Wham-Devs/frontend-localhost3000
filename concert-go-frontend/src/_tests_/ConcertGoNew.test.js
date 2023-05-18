import {
  screen,
  render,
  container,
  querySelector,
} from "@testing-library/react"
import ConcertGoNew from "../pages/ConcertGoNew"
import { BrowserRouter } from "react-router-dom"

describe("<ConcertGoNew />", () => {
  it("renders new event form", () => {
    render(
      <BrowserRouter>
        <ConcertGoNew />
      </BrowserRouter>
    )

    const heading = screen.getByRole("heading", {
      name: /create a new event:/i,
    })
    expect(heading).toBeInTheDocument()

    const button = screen.getByRole("button", {
      name: /read more/i,
    })
    expect(button).toBeInTheDocument()

    const submit = screen.getByRole("button", {
      name: /submit/i,
    })
    expect(submit).toBeInTheDocument()

    expect(screen.getByText(/city/i)).toBeInTheDocument()

    expect(screen.getByText(/state/i)).toBeInTheDocument()

    expect(screen.getByText(/date/i)).toBeInTheDocument()

    expect(screen.getByText(/show time/i)).toBeInTheDocument()
  })
})
