import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

const EventsRootLayout = () =>{
    

    // This  layout is used for the wrapper for all other routes so this outlet will cover all children routes
    return<>
    <EventsNavigation/>
    <Outlet></Outlet>
    </>
}


export default EventsRootLayout;