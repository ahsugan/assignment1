import React from "react";
const DrawerHeader = () => {
    const text = () => "<"
    return (
        <div style={{ background: '#39aebc', width: '100%', height: '60px', margin: "0", padding: '0', boxSizing: "border-box" }}>
            <div style={{ color: 'white', display: 'flex', alignItems: 'center', height: '100%' }}>
                <h6><span style={{ fontSize: "20px" }}>{text()}</span>&nbsp;&nbsp;Saving Segment</h6>
            </div>
        </div>
    )
}

export default DrawerHeader;