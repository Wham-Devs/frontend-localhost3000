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
		expect(screen.getByText(/ConcertGo/i)).toBeInTheDocument();
		expect(screen.getByText(/Add an Event/i)).toBeInTheDocument();
		screen.logTestingPlaygroundURL();
		expect(screen.getByRole("link", { name: /list of events/i }));
		expect(screen.getByRole("link", { name: /add an event/i }));
		expect(screen.getByRole("link", { name: /frequently asked questions/i }));
		expect(screen.getByRole("link", { name: /meet the team/i }));
	});
});
