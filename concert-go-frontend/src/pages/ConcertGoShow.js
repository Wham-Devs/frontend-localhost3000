import React from "react"
import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"

const ConcertGoShow = ({ currentEvent, deleteEvent }) => {
  const { id } = useParams()
  let selectedEvent = currentEvent?.find((event) => event.id === +id)
  if (!selectedEvent) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 ml-4 text-center">
        Your listing:
      </h1>
      <div className="flex justify-center">
        <div className="bg-white shadow overflow-hidden rounded-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
          <img className="w-full" alt="Card" src={selectedEvent.images} />
          <div className="px-4 py-3">
            <h3 className="text-lg font-medium text-gray-900">
              {selectedEvent.artist} <br />
              {selectedEvent.genre}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {selectedEvent.city}, {selectedEvent.state} <br />
              {selectedEvent.date} @ {selectedEvent.show_time}
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-2">
            <div>
              <NavLink
                to={`/concertgoedit/${selectedEvent.id}`}
                className="mx-2"
              >
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
                className="nav-link"
              ></NavLink>
              <NavLink to="/concertgoindex" className="nav-link">
                <button onClick={() => deleteEvent(selectedEvent.id)}>
                  Delete Event
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConcertGoShow
