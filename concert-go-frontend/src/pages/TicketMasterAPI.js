import React from "react";
import { Button } from "reactstrap";

const TicketMasterAPI = ({ handleSubmit, currentEvent }) => {
	const events = currentEvent._embedded && currentEvent._embedded.events;

	return (
		<div>
			TicketMasterAPI
			<Button value="button" onClick={handleSubmit}>
				Push Me Papi
			</Button>
			{events &&
				events.map((event) => (
					<div key={event.id}>
						<h1>{event.name}</h1>
						<img src={event.images[0].url} alt="Event" />
						<p>Genre: {event.classifications[0].genre.name}</p>
						<p>Date: {event.dates.start.localDate}</p>
						<p>Showtime: {event.dates.start.localTime}</p>
            <p>Venue: {event._embedded.venues[0].name}</p>
            <p>City: {event._embedded.venues[0].city.name}</p>
            <p>State: {event._embedded.venues[0].state.name}</p>
					</div>
				))}
		</div>
	);
};

export default TicketMasterAPI;
