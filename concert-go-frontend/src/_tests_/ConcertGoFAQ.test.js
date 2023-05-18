import { render, screen } from "@testing-library/react";

import ConcertGoFAQ from "../pages/ConcertGoFAQ";

describe("<ConcertGoFAQ />", () => {
    it("It should show user FAQ page", () => {
      render(
        
          <ConcertGoFAQ/>
        
      );
      
      
      const element = screen.getByText(/time/i)
      expect(element).toBeInTheDocument();

      const heading = screen.getByRole('heading', { name: /what time does the concert start\?/i })
      expect(heading).toBeInTheDocument()

      const headingTwo = screen.getByRole('heading', {
        name: /how can i contact customer support for further assistance\?/i
      })
      expect(headingTwo).toBeInTheDocument()
   

      
    });
  });
