import React from "react";
import { NavLink } from "react-router-dom";

const ConcertGoProtectedIndex = ({ currentEvent, currentUser }) => {
	const myEvents = currentEvent?.filter(
		(events) => currentUser?.id === events.user_id
	);
	return (
		<>
			{myEvents.map((events, index) => {
				return (
					<div key={index} className="flex justify-center">
						<div className="bg-white shadow overflow-hidden rounded-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
							<img className="w-full" alt="Card" src={events.images} />
							<div className="px-4 py-3">
								<h3 className="text-lg font-medium text-gray-900">
									{events.artist} <br />
									{events.genre}
								</h3>
								<p className="mt-1 text-sm text-gray-500">
									{events.city}, {events.state} <br />
									{events.date} Doors Open @ {events.show_time}
								</p>
							</div>
							<div className="border-t border-gray-200 px-4 py-2">
								<div>
									<NavLink to={`/concertgoedit/${events.id}`} className="mx-2">
										<button className="backdrop bg-white bg-opacity-0 border border-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg justify-center text-center">
											Edit Event
										</button>
									</NavLink>
									<NavLink
										color="primary"
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											marginTop: "3rem",
										}}
										to="/concertgoindex/"
										className="nav-link"></NavLink>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default ConcertGoProtectedIndex;
