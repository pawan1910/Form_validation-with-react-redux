import React from "react";
import Option from "./options";
import Select from 'react-select';
import './DropDown.css'

const DropDown = (props) => {
    return(
        <div className="drop"style={{width:"300px,color: #4b9bbe,border: 1px solid #4b9bbe"}}>
        <Select
    isMulti
    options={props.Optionsopt}
    components={{
        Option
    }}
    name={props.name}
    onChange={props.OnChangedown}
    closeMenuOnSelect={false}
    hideSelectedOptions={false}
    classNamePrefix="select"
  />
  </div>
    )
 }
export default DropDown;