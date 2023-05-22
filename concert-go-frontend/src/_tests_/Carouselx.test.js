import { screen, render } from "@testing-library/react"
import Carouselx from "../components/Carouselx"
import { BrowserRouter } from "react-router-dom"

describe("<Carouselx />", () => {
  it("Show the user a list of event cards", () => {
    render(
      <BrowserRouter>
        <Carouselx />
      </BrowserRouter>
    )

    expect(
      screen.getByRole("button", {
        name: /slide 1/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("img", {
        name: /slide 2/i,
      })
    ).toBeInTheDocument()

    expect(screen.getByText(/previous/i)).toBeInTheDocument
  })
})
