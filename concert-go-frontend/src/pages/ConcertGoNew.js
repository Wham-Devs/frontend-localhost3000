import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const ConcertGoNew = () => {
  return (
    <>
      <div class="h-screen flex">
        <div class="flex w-1/2 bg-gradient-to-tr from-red-900 to-red-500 i justify-around items-center">
          <div>
            <h1 class="text-gray-200 font-bold text-7xl font-anton shadow-black ">
              CONCERT GO
            </h1>
            <p class="text-white mt-1 ml-1 shadow-lg shadow-gray-800">
              FIND YOUR NEXT VENUE
            </p>
            <button
              type="submit"
              class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
            >
              Read More
            </button>
          </div>
        </div>
        <div class="flex w-1/2 justify-center items-center bg-white">
          <Form
            className=" shadow-lg border-gray-200 border-4 rounded-lg p-4
            w-full bg-gray-200"
            style={{ width: "90%", margin: "auto" }}
          >
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                id="event-city"
                name="city"
                placeholder="Enter city here"
                type="text"
                className="shadow-lg border-3 border-black"
              />
            </FormGroup>
            <FormGroup>
              <Label for="state">State</Label>
              <Input
                id="event-state"
                name="state"
                placeholder="Enter state here"
                type="text"
                className="shadow-lg border-3 border-black"
              />
            </FormGroup>
            <FormGroup>
              <Label for="venue">Venue</Label>
              <Input
                id="event-venue"
                name="venue"
                placeholder="Enter venue here"
                type="text"
                className="shadow-lg border-3 border-black"
              />
            </FormGroup>
            <FormGroup>
              <Label for="artist">Artist</Label>
              <Input
                id="event-artist"
                name="artist"
                placeholder="Enter artist here"
                type="text"
                className="shadow-lg border-3 border-black"
              />
            </FormGroup>
            <FormGroup>
              <Label for="date">Date</Label>
              <Input
                id="event-date"
                name="date"
                placeholder="Enter date here"
                type="text"
                className="shadow-lg border-3 border-black"
              />
            </FormGroup>
            <FormGroup>
              <Label for="show_time">Show Time</Label>
              <Input
                id="show_time"
                name="show_time"
                placeholder="Enter show time here"
                type="text"
                className="shadow-lg border-3 border-black"
              />
            </FormGroup>
            <FormGroup>
              <Label for="genre">Genre</Label>
              <Input
                id="event-genre"
                name="genre"
                placeholder="Enter genre here"
                type="text"
                className="shadow-lg border-3 border-black"
              />
            </FormGroup>
            <FormGroup>
              <Label for="images">Image URL</Label>
              <Input
                id="event-images"
                name="images"
                placeholder="Enter image URL here"
                type="text"
                className="shadow-lg border-3 border-black"
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ConcertGoNew;