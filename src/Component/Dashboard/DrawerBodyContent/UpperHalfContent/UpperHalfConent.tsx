import { FunctionComponent } from "react"
interface NameOfSegmet{
    nameEntered:(e:any)=>void
}
const UpperHalfContent = (props:NameOfSegmet) =>{
    return(
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: "20px", height: '40vh' }}>

                <h6>Enter the Name of Segment</h6>
                <input type="input" onChange={e=>props.nameEntered(e)}placeholder="Name of the Segment" style={{ border: '2px solid #c7cdd0', height: '40px', textIndent: "10px" }} />
                <h6>To save your segment, you need to add schemas to build the query</h6>
               <div style={{ display: 'flex',gap:'10px',justifyContent:'end'}}>
                <div id="greenDot" style={{ display: 'flex'}}>

                    <div id="div1" style={{ background: 'green', borderRadius: '50px', height: '10px', width: '10px' }} ></div>&nbsp;
                    <div id="lbk_mng_rdooption">
                        <div id="div2">--user trait</div>
                    </div>
                </div>

                <div id="purpleDot" style={{ display: 'flex'}}>

                    <div id="div1" style={{ background: '#d24572', borderRadius: '50px', height: '10px', width: '10px' }} ></div>&nbsp;
                    <div id="lbk_mng_rdooption">
                        <div id="div2">--user trait</div>
                    </div>
                </div>
                </div>

            </div>
    )
}

export default UpperHalfContent