import { screen, render } from "@testing-library/react";
import ConcertGoEdit from "../pages/ConcertGoEdit";
import { BrowserRouter } from "react-router-dom";

describe("<ConcertGoEdit />", () => {
	it("Show the user a list of event cards", () => {
		render(
			<BrowserRouter>
				<ConcertGoEdit />
			</BrowserRouter>
		);
		const button = screen.getByRole("button", {
			name: /read more/i,
		});
		expect(button).toBeInTheDocument();

		const heading = screen.getByRole("heading", {
			name: /Concert Go/i,
		});
		expect(heading).toBeInTheDocument();

		expect(screen.getByText(/city/i)).toBeInTheDocument();
		expect(
			screen.getByPlaceholderText(/enter state here/i)
		).toBeInTheDocument();
		expect(
			screen.getByPlaceholderText(/enter venue here/i)
		).toBeInTheDocument();
		expect(
			screen.getByPlaceholderText(/enter artist here/i)
		).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/enter date here/i)).toBeInTheDocument();
		expect(
			screen.getByRole("textbox", {
				name: /show time/i,
			})
		).toBeInTheDocument();
		expect(
			screen.getByPlaceholderText(/enter genre here/i)
		).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/Enter image URL/i)).toBeInTheDocument();
		expect(
			screen.getByRole("button", {
				name: /submit/i,
			})
		).toBeInTheDocument();
	});
});
