import React,{useState} from "react";
import './Input.css';


const FormInput = (props) => {
    const[focus,setFocus] = useState(false)
    const{label,errorMessage,id,onChange, ...inputProps} = props;

    const handleFocus = (e) => {
        setFocus(true);
    }

    return(
        <div className="formInput">
            <label>{label}</label>
            <input {...inputProps}
            onChange={onChange}
            focus={focus.toString()}
            onFocus = {() =>
            inputProps.name === "confirmpassword" && setFocus(true)}
            onBlur = {handleFocus}/>
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput;