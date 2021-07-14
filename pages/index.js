// import {DUMMY_EVENTS, getFeaturedEvents} from "../dummy-data";
import EventList from "../components/events/Eventlist";
import {getFeaturedEvents} from "../dummy-data";



function HomePage() {

    const featuredEvents = getFeaturedEvents()

  return (
    <div>
          <EventList items={featuredEvents}/>

    </div>
  )
}
export default HomePage
