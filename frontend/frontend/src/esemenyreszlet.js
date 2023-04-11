import React, { useState, useEffect } from "react";
import axios from "axios";

const EventDetails = ({ eventId }) => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Adatok lekérése az API-ból vagy adatbázisból az eventId alapján
    axios.get(`http:/localhost:2023/${eventId}`)
      .then(response => {
        setEvent(response.data);
      })
      .catch(error => {
        console.error("Hiba az esemény részleteinek lekérdezése során:", error);
      });
  }, [eventId]);

  return (
    <div>
      {event ? (
        <div>
          <h2>{event.name}</h2>
          <p>{event.description}</p>
          <p>{event.location}</p>
          <p>{event.time}</p>
          <p>{event.organizer}</p>
        </div>
      ) : (
        <p>Esemény betöltése...</p>
      )}
    </div>
  );
};