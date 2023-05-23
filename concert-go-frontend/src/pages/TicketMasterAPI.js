import React from "react";
import { Button } from "reactstrap";

const TicketMasterAPI = ({ handleSubmit, currentEvent }) => {
	return (
		<div>
			TicketMasterAPI
			<Button value="button" onClick={handleSubmit}>
				Push Me
			</Button>
			{currentEvent &&
				currentEvent._embedded.events.map(({ index, events, images, name, state, id }) => {
					return (
						<div>
              <ul>
<li key={index}>{name}</li>
 <li key={index}>{state}</li>
<li key={index}><img src={images[0].url} alt="Concert test" /></li>
              </ul>
							
             
							
						</div>
					);
				})}
		</div>
	);
};

export default TicketMasterAPI;
