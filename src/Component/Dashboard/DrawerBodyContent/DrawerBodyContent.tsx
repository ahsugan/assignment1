import React, { FunctionComponent,useState} from "react";
import "./DrawerBodyContent.css"
import UpperHalfContent from "./UpperHalfContent/UpperHalfConent";
import SchemaContent from "./SchemaContent/SchemaContent";

const DrawerBodyContent: FunctionComponent = () => {
    const [nameOfSegment,nameEnteredValue] = useState<string>('')

    const nameEntered = (name:string) =>{
        nameEnteredValue(name)
    }
    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            <UpperHalfContent nameEntered={nameEntered}/>
            <SchemaContent nameOfSegment={nameOfSegment}/>
        </div>





    )

}

export default DrawerBodyContent;