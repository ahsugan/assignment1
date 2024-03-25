import React, { FunctionComponent, useEffect, useState } from "react"
import CustomDropDown from "./CustomDropDown";
import './SchemaContent.css'
let isDisplay = false;

let arraySelected: any = []

interface NameOfSegmet{
    nameOfSegment:string
}
const SchemaContent = (props:NameOfSegmet) => {
    const [mainOptionSelected, setMainOptionSelected] = useState<string>()
    const [array, setArray] = useState<string[]>([])
    const [selectedArray, setselectedArray] = useState<string[]>([])


    const optionChilds = ["First Name", "Last Name", "Gender", "Age", "Account Name", "City", "State", "Add Schema to Segment"]
    useEffect(() => {
        setArray(optionChilds)
    }, [])
    
    const AddSchema = () => {
        let element: HTMLElement | null = document.getElementById("container") as HTMLElement
        AddElement(element)

    }

    const AddElement = (element: any) => {
        const selectElement = React.createElement("select", {},
            React.createElement("option", { value: "A" }, "Option A"),
            React.createElement("option", { value: "B" }, "Option B"),
            React.createElement("option", { value: "C" }, "Option C")
        );
    }
   /** checks whether user selected the schema and then add's and remove's from respective drop down list*/
    const mainOptionsSelected = (e: any) => {
        console.log(e.target.value)
        if (e.target.value !== 'Add Schema to Segment')
            setMainOptionSelected(e.target.value)
        else if (e.target.value === 'Add Schema to Segment') {
            const selectedDropDownValue = e.target.value.toString().trim()
            console.log("e ", selectedDropDownValue)
            const Newarray: string[] = array.filter((data: string, index: any) => {
                console.log("data ", data, mainOptionSelected)
                return data != mainOptionSelected
            })
            var result: any = [];
            Newarray.push("Add Schema to Segment")
            Newarray.forEach(function (item) {
                if (result.indexOf(item) < 0) {
                    result.push(item);
                }
            });

            setArray(result)
            arraySelected.push(mainOptionSelected)
            setselectedArray(arraySelected)
        }

    }
    /** Send schema to the server*/
    const SendSchemaToServer = async () => {

        const bodyData: any = {
            first_name: '',
            last_name: '',
            account_name: '',
            age: '',
            gender: '',
            city: '',
            state: '',
            name_of_segment_:''
        }
        const bodyDataArray = Object.values(bodyData)
        const bodyDataKeys = Object.keys(bodyData)
        selectedArray.map((data, index) => {

            let newValue = data.toString().toLowerCase().split('')
            for (var i = 0; i < newValue.length; i++) {
                if (newValue[i] == ' ') {
                    newValue[i] = '_';
                    break;
                }
            }
            const strValue = newValue.join('')
            console.log("new Value", newValue, strValue)
            const index1: any = bodyDataKeys.indexOf(strValue)
            console.log("index1 ", index1)
            if (index1 != -1) {
                const value = Object.keys(bodyData)[index1]
                console.log("index1 value ", value)
                if (value === strValue) {
                    bodyDataArray[index1] = data;
                }
            }
        })

        const objectTags: any = Object.fromEntries(bodyDataKeys.map((t, index1) => [t, bodyDataArray[index1]]))
        if(props.nameOfSegment === ''){
            alert("Please enter segment name !")
            return;
        }
        let isRespnseFromServer = false;
        await fetch('https://webhook.site/51b4069c-ea2e-4097-8c31-d6172d54bcd5', {
            method: 'post',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(objectTags)
        }).then(data => {
            if(data){
                isRespnseFromServer = true;
            }})
        if(isRespnseFromServer){
            alert("Segment data send to server!!!")
            return;
        }    
    }
    return (
        <div>

            <div style={{ display: 'flex', border: '1px solid blue', }}>
                <div style={{ width: '30px', height: '60px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <div id="purpleDot">
                            <div id="div1" style={{ background: '#d24572', borderRadius: '50px', height: '10px', width: '10px' }} ></div>&nbsp;
                        </div>
                    </div>
                </div>
                <div id="containerChild" style={{ width: '100%', height: '100px' }} onChange={e => { mainOptionsSelected(e) }}>
                    <select>
                        {selectedArray.map((child, index) =>
                            <option>{child}</option>
                        )}
                    </select>
                </div>
                <i className="fa fa-minus" aria-hidden="true"></i>
            </div>

            <br />
            <div id="container">
                <select onChange={e => mainOptionsSelected(e)}>
                    {array.map((child, index) =>
                        <option value={child} key={index}>{child}</option>
                    )}
                </select>
            </div>
            <br />
            <button style={{ border: 'none', color: '#41b494', marginLeft: '10px' }} onClick={() => AddSchema()}><span> + </span>Add schema</button>
            <div>
                <br />
                <br />
                <div style={{ display: 'flex', gap: '10px', marginLeft: '10px' }}>
                    <button style={{ border: 'none', color: 'white', background: '#41b494', borderRadius: '5px', height: '40px' }} onClick={() => SendSchemaToServer()}>Save Segment</button>
                    <button style={{ border: '1px solid red', color: '#d24572', background: 'white', height: '40px', borderRadius: '5px' }} onClick={() => AddSchema()}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default SchemaContent