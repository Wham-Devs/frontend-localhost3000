import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import Carouselx from "../components/Carouselx";

const ConcertGoIndex = ({ currentEvent }) => {
  return (
    <>
      <div className="bg-black">
        <h1 className="text-2xl font-bold mb-4 ml-4 text-center">Event List</h1>
        <div className="container mx-auto max-w-screen-lg">
          <Carouselx />
          <div className="grid  grid-cols-4 gap-8 justify-center align-middle pt-10">
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
              }) => (
                <Card
                  key={currentEvent}
                  style={{ width: "18rem", height: "30rem" }}
                  className="rounded-lg shadow-lg bg-transparent  border-red-300 border border-spacing-3"
                >
                  <div className="card-image-container">
                    <img
                      alt="Concert Image"
                      src={images}
                      className="card-image"
                    />
                  </div>
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
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConcertGoIndex;
