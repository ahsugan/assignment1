import { FunctionComponent } from "react";
import './Header.css'

const Header:FunctionComponent = () =>{
    const text = () =>   '<'
  return(
    <div id='MainBgPanel'>
      <div style={{display:'flex',alignItems:'center',width:"100%",height:'60px'}}>
       <h6 style={{color:'white'}}><span>{text()}</span>&nbsp;View Audience</h6>
      </div>

    </div>
  )
}
export default Header;