import { useState } from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ConcertGoEdit from "./pages/ConcertGoEdit";
import ConcertGoIndex from "./pages/ConcertGoIndex";
import ConcertGoNew from "./pages/ConcertGoNew";
import ConcertGoProtectedIndex from "./pages/ConcertGoProtectedIndex";
import ConcertGoShow from "./pages/ConcertGoShow";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import ConcertGoFAQ from "./pages/ConcertGoFAQ";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { useEffect } from "react";
import TestCard from "./components/TestCard";
import TicketMasterAPI from "./pages/TicketMasterAPI";


function App() {

  const [currentEvent, setCurrentEvent] = useState([]);
	const [currentTicketMaster, setCurrentTicketMaster] = useState(null);
	const [currentUser, setCurrentUser] = useState(1);

	useEffect(() => {
		readEvent();
		ticketMasterAPI();
	}, []);

  const url = "http://localhost:3000";

  const ticketMasterAPI = () => {
		fetch(
			"https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=LcWUOGfoF3Gb6ZcpswipMTtkcoVr9gPw&locale=*"
		)
			.then((response) => response.json())
			.then((payload) => setCurrentTicketMaster(payload))
			.catch((error) => console.log("errors: ", error));

		console.log("API Fetching");
	};

	// LOGOUT
	const logout = () => {
		fetch(`${url}/logout`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: localStorage.getItem("token"),
			},
			method: "DELETE",
		})
			.then(() => {
				localStorage.removeItem("token");
				setCurrentUser(null);
			})
			.catch((error) => console.log("logout error: ", error));
	};

	// LOGIN
	const login = (userInfo) => {
		fetch(`${url}/login`, {
			body: JSON.stringify(userInfo),
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			method: "POST",
		})
			.then((response) => {
        if (!response.ok) {
        throw Error(response.statusText);
      }
				localStorage.setItem("token", response.headers.get("Authorization"));
				return response.json();
			})
			.then((payload) => {
				setCurrentUser(payload);
			})
			.catch((error) => console.log("login error: ", error));
	};

	// SIGNUP
	const signup = (userInfo) => {
		fetch(`${url}/signup`, {
			body: JSON.stringify(userInfo),
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			method: "POST",
		})
			.then((response) => {
        if (!response.ok) {
        throw Error(response.statusText);
      }
				localStorage.setItem("token", response.headers.get("Authorization"));
				return response.json();
			})
			.then((payload) => {
				setCurrentUser(payload);
			})
			.catch((error) => console.log("signup error: ", error));
	};

	// READ
	const readEvent = () => {
		fetch(`${url}/events`)
			.then((response) => response.json())
			.then((payload) => {
				setCurrentEvent(payload);
			})
			.catch((error) => console.log("events read errors: ", error));
	};

	// CREATE
	const createEvent = (createdEvent) => {
		fetch(`${url}/events`, {
			body: JSON.stringify(createdEvent),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		})
			.then((response) => response.json())
			.then(() => readEvent())
			.catch((error) => console.log("create error: ", error));
	};

	// UPDATE
	const updateEvent = (event, id) => {
		fetch(`${url}/events/${id}`, {
			body: JSON.stringify(event),
			headers: {
				"Content-Type": "application/json",
			},
			method: "PATCH",
		})
			.then((response) => response.json())
			.then(() => readEvent())
			.catch((error) => console.log("update error: ", error));
	};

	// DELETE
	const deleteEvent = (id) => {
		fetch(`${url}/events/${id}`, {
			body: JSON.stringify(),
			headers: {
				"Content-Type": "application/json",
			},
			method: "DELETE",
		})
			.then((response) => response.json())
			.then(() => readEvent())
			.catch((error) => console.log("delete error: ", error));
	};

	// ROUTES AND COMPONENT CALLS
	return (
		<>
			<Header currentUser={currentUser} logout={logout} />
			<Routes>
				<Route path="/signin" element={<SignIn login={login} />} />
				<Route path="/signup" element={<SignUp signup={signup} />} />
				<Route path="/" element={<Home />} />
				<Route
					path="/concertgoedit/:id"
					element={
						<ConcertGoEdit
							currentEvent={currentEvent}
							updateEvent={updateEvent}
							currentUser={currentUser}
							deleteEvent={deleteEvent}
						/>
					}
				/>
				<Route
					path="/concertgoindex"
					element={
						<ConcertGoIndex
							currentTicketMaster={currentTicketMaster}
							currentEvent={currentEvent}
						/>
					}
				/>

				<Route
					path="/concertgoprotectedindex"
					element={
						<ConcertGoProtectedIndex
							currentEvent={currentEvent}
							currentUser={currentUser}
							deleteEvent={deleteEvent}
						/>
					}
				/>

				<Route
					path="/concertgonew"
					element={
						<ConcertGoNew createEvent={createEvent} currentUser={currentUser} />
					}
				/>
				<Route
					path="/concertgoshow/:id"
					element={
						<ConcertGoShow
							currentEvent={currentEvent}
							deleteEvent={deleteEvent}
						/>
					}
				/>
				<Route
					path="/ticketmasterapi"
					element={
						<TicketMasterAPI currentTicketMaster={currentTicketMaster} />
					}
				/>
				<Route path="/aboutus" element={<AboutUs />} />
				<Route path="/concertgofaqs" element={<ConcertGoFAQ />} />
				<Route path="/*" element={<NotFound />} />
				<Route path="/test" element={<TestCard />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;