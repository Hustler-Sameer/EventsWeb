import { useParams } from "react-router-dom";
const EventDetail = () => {
    const params = useParams();
    console.log(params);

    return <><h1>EventDetail Page Welcomes you</h1>
    <p> Event id : {params.id}</p>

</>
}

export default  EventDetail;