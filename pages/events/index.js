import {getAllEvents} from "../../dummy-data";
import EventList from "../../components/events/Eventlist";

const AllEventsPage = () => {

    const events = getAllEvents()

    return (
        <div>
           <EventList items={events}/>
        </div>
    );
};

export default AllEventsPage;
