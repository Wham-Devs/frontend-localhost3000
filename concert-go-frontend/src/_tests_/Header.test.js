import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";

describe("<Header />", () => {
	it("renders for the user", () => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		);
		const element = screen.getByText(/ConcertGo/i);
		expect(element).toBeInTheDocument();

		expect(screen.getByText(/open main menu/i)).toBeInTheDocument();

		const login = screen.getByRole("img", {
			name: /logo/i,
		});
		expect(login).toBeInTheDocument();
	});
});
