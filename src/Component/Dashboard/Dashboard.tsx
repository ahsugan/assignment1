import { FunctionComponent,useState } from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Drawer from 'react-modern-drawer'
import DrawerHeader from "./DrawerHeader/DrawerHeader";
import DrawerBodyContent from "./DrawerBodyContent/DrawerBodyContent";
import './Dashboard.css'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { truncate } from "fs/promises";
const Dashboard:FunctionComponent = () =>{
    const [isOpen, setIsOpen] = useState(false)
    const [enableOverlay, setEnableOverlay] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
        setEnableOverlay((prevState) => !prevState)
    }
    const setDrawerOpen = () =>{
        console.log("hei")
        toggleDrawer()
    }
    const DrawerBody = () => {
        return (
            <div style={{ display:'flex',flexDirection:'column',height:'100vh'}}>
                <DrawerHeader />
                <DrawerBodyContent />
            </div>
        )
    }
   
  return(

      <div style={{ backgroundColor: '#888d8c', height: '100vh' }}>
          <Header />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px', width: '300px' }}>
              <Body setDrawerOpen={setDrawerOpen} />
          </div>

          <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction='right'
              size={400}
              enableOverlay={enableOverlay}
              overlayClassName="drawerClassName"
            >
              <DrawerBody />
          </Drawer>
      </div>
        
    )
}

export default Dashboard;