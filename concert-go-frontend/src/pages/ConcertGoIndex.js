import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const ConcertGoIndex = ({ currentEvent }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-8">
        {currentEvent?.map(
          ({
            currentEvent,
            city,
            state,
            venue,
            artist,
            date,
            show_time,
            genre,
            images,
            id,
          }) => {
            return (
              <Card
                key={currentEvent}
                style={{
                  width: "18rem",
                }}
              >
                <img alt="Concert Image" src={images} />
                <CardBody>
                  <CardTitle tag="h5">{artist}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {genre}
                  </CardSubtitle>
                  <CardText>
                    {venue}
                    <br />
                    {city}, {state}
                    <br />
                    {date} @ {show_time}
                  </CardText>
                </CardBody>
                <NavLink to={`/concertgoshow/${id}`}>
                  <Button className="backdrop bg-gray-400 bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
                    View Event
                  </Button>
                </NavLink>
              </Card>
            );
          }
        )}
      </div>
    </>
  );
};

export default ConcertGoIndex;