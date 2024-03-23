import { FunctionComponent } from "react";
import './Body.css'

interface bodyInterface{
    setDrawerOpen:()=> void;
}

const Body =(props:bodyInterface)=>{
    return(
        <div>
            <button id="viewSegmentButton" onClick={()=>props.setDrawerOpen()}>View Segment</button>
        </div>
    )
}

export default Body;