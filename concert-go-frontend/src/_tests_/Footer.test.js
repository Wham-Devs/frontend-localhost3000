import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import Footer from "../components/Footer"

describe("<Footer />", () => {
  it("renders without errors", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    expect(screen.getByText(/All Rights Reserved/i)).toBeInTheDocument()
    expect(screen.getByText(/about/i))
    expect(screen.getByText(/privacy policy/i))
    expect(screen.getByText(/licensing/i))
    expect(screen.getByText(/contact/i))
    
  })
})