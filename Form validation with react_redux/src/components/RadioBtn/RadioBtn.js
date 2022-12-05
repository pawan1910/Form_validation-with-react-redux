import React from "react";

const RadioBtn = ({label, onChangeRadio, ...inputProps}) => {
    return(
        <div>
            <input {...inputProps} onChange={onChangeRadio} required/>{label}
        </div>
    )
}

export default RadioBtn;