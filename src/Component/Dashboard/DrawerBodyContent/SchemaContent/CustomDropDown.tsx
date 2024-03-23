import React, { Component } from "react";

class CustomDropDown extends Component {
  constructor(props:any) {
    super(props);
    this.state = {
      activeElementType: "dropdown"
    };
  }

  dropDownChanged(e:any) {
    if (e.target.value === "custom") {
      this.setState({ activeElementType: "input" });
    }
  }

  dropDownComp() {
    return (
      <select onChange={e => this.dropDownChanged(e)}>
        <option value="1">First Name</option>
        <option value="2">Last Name</option>
        <option value="3">Gender</option>
        <option value="3">Age</option>
        <option value="3">Account Name</option>
        <option value="3">City</option>
        <option value="3">State</option>
    
      </select>
    );
  }

  inputFieldComp() {
    return <input />;
  }

  render() {
    return (
      <div>
    
        {this.dropDownComp()}
     
      </div>
    );
  }
}

export default CustomDropDown;
