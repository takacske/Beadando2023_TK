import React, { useEffect, useState } from "react";
import axios from "axios";

export default function EventList(){
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Adatok lekérése az API-ból vagy adatbázisból
        axios.get("http:/localhost:2023/")
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error("Hiba az események lekérdezése során:", error);
            });
    }, []);

    return (
        <div>
        {events.length === 0 ? 
        (<p>Nincs elérhető esemény</p>) : 
        (events.map(event => 
        (<div key={event.id}>
        <h2>{event.nev}</h2>
        </div>)))}
        </div>
        )
}