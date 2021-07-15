import {useRouter} from "next/router";
import {getFilteredEvents} from "../../dummy-data";
import EventList from "../../components/events/Eventlist";
import ResultsTitle from "../../components/results-title/results-title";
import Button from "../../components/ui/Button"
import Link from "next/link";
import ErrorAlert from "../../components/error-alert/error-alert";

const FilteredEventsPage = () => {
    const router = useRouter()
    const filterData = router.query.slug
    if (!filterData){
        return <p className={'center'}>Loading...</p>
    }

    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]

    const numYear = +filteredYear
    const numMonth = +filteredMonth

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12){
        return (
            <>
                <ErrorAlert><p className={'center'}>Invalid Filter</p></ErrorAlert>
                <div className={'center'}><Button onClick={router.push('/')}>Home</Button></div>
            </>
        )
    }

    const filteredEvents = getFilteredEvents({year: numYear, month: numMonth})
    if (filteredEvents.length === 0){
        return (
            <>
                <ErrorAlert><p>No Events Found</p></ErrorAlert>
                <div className={'center'}><Button onClick={router.push('/')}>Home</Button></div>
            </>

        )
    }

    const date = new Date(numYear, numMonth-1)

    return (
        <>
            <ResultsTitle date={date}/>
            <EventList items={filteredEvents}/>
        </>
    );
};

export default FilteredEventsPage;
