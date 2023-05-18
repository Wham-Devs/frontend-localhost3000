import { render, screen } from "@testing-library/react";

import AboutUs from "../pages/AboutUs";

describe("<AboutUs />", () => {
    it("It should show user About Us page", () => {
      render(
        
          <AboutUs/>
        
      );
      
     

      const element = screen.getByText(/Felix/i)
      expect(element).toBeInTheDocument();

      const heading = screen.getByRole('heading', {
        name: /technology lead/i
      })
      expect(heading).toBeInTheDocument()
   

      
    });
  });
