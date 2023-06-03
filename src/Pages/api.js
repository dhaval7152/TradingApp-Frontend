import DataContext from "./dataContext";
import { useState } from "react";

const DataState = (props) => {
  const host="http://127.0.0.1:8000/";
  const eventIntial = [
    // {
    //   eventId: 1,
    //   EventName: "Samay Raina Unfiltered - India Tour",
    //   Date: 1683022226,
    //   startBooking: 1682919935,
    //   endBooking: 1683022226,
    //   tickets: 100,
    // },
    // {
    //   eventId: 2,
    //   EventName: "Ritviz live in Concert - Ahmedabad",
    //   Date: 1683022226,
    //   startBooking: 1682919935,
    //   endBooking: 1683022226,
    //   tickets: 100,
    // },
  ];
  const [events, setEvents] = useState(eventIntial);

  const getData = async () => {
    try {
      const response = await fetch(`${host}ViewAllEvent`, {
        method: "POST",
        
      });
      const json = await response.json();
      console.log(json);
      setEvents(json);
    } catch (error) {
      console.error("While fetching Notes Something went wrong");
    }
  };

  const addEvent = async (eventId, EventName,Date, startBooking,endBooking,tickets) => {
    console.log("hitting api");
    const response = await fetch(`${host}CreateEvent`, {
      method: "POST",
      // Provide all values to createEvent
      body: JSON.stringify({eventId, EventName,Date, startBooking,endBooking,tickets }),
    });
    console.log( response.body);
    // const note = await response.json();
    // setEvents(events.concat(note));
  };

  // // Add Event
  // const addEvent = (eventId, EventName, startBooking) => {
  //   // ToDO: Api call
  //   console.log(`Adding New Event ${events.length}`);
  //   const event = {
  //     eventId: eventId,
  //     EventName: EventName,
  //     // "Date": 1683022226,
  //     startBooking: startBooking,
  //     // "endBooking": 1683022226,
  //     // "tickets": 100
  //   };
  //   setEvents(events.concat(event));
  // };

  return (
    <DataContext.Provider value={{ events, setEvents, addEvent,getData }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;