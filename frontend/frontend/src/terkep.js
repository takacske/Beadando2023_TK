class EventMap extends Component {
    render() {
      return (
        <div>
          <h1>Térkép</h1>
          {/* Itt jeleníthetjük meg az eseményeket térképi nézetben */}
        </div>
      );
    }
  }
  
  export default class App extends Component {
    render() {
      return (
        <div>
          {/* Az útvonalakra alapozva a megfelelő komponenst jelenítjük meg */}
          {/* Az "/event/:eventId" útvonal a dinamikus esemény azonosítóval */}
          <Route exact path="/" component={EventList} />
          <Route path="/event/:eventId" component={EventDetails} />
          <Route path="/calendar" component={EventCalendar} />
          <Route path="/map" component={EventMap} />
        </div>
      );
    }
  }