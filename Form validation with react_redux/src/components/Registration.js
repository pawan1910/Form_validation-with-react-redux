import React,{useState} from "react";
import { useDispatch } from "react-redux";
import FormInput from "./Input/Input";
import RadioBtn from "./RadioBtn/RadioBtn";
import DropDown from "./DropDown/DropDown";
import FileUpload from "./Image/File";
import './Registration.css';
import { userAction } from "../redux/userDetails/userActions";



function Registration() {
  const [values, setValues] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    Birthday: "",
    Password: "",
    Confirmpassword: "",
    Gender: "",
    skill: [],
    file: "",
  });

  const dispatch = useDispatch();

  const inputs = [
    {
      id: 1,
      name: "Firstname",
      type: "text",
      placeholder: "Firstname",
      label: "Firstname",
      // require: true,
      errorMessage: "Please enter your Firstname",
    },
    {
      id: 2,
      name: "Lastname",
      type: "text",
      placeholder: "Lastname",
      label: "Lastname",
      // require: true,
      errorMessage: "Please enter your Lastname",
    },
    {
      id: 3,
      name: "Email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      // require: true,
      errorMessage: "Please enter valid email address",
    },
    {
        id: 4,
        name: "Birthday",
        type: "date",
        label: "Birthday",
        max:"2022-11-30",
        // require: true,
        errorMessage:"Please enter your Birthdate"
      },
      {
        id: 5,
        name: "Password",
        type: "password",
        placeholder: "Password",
        label: "Password",
        pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$",
        autoComplete:"off",
        errorMessage: "Password should be 8-20 characters and 1 character,1 special character,1 number",
      },
       {
        id: 6,
        name: "Confirmpassword",
        type: "password",
        placeholder: "Confirm Password",
        label: "Confirm Password",
        pattern: values.Password,
        autoComplete:"off",
        errorMessage: "password don't match",
      }
    ]
  
    const onChange = (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      })
    }
    
    const checkInputs = [{
        id: 7,
        name: "Gender",
        type: "radio",
        label: "Male",
        value: "Male",
      },
      {
        id: 8,
        name: "Gender",
        type: "radio",
        label: "Female",
        value: "Female",
      }, {
        id: 9,
        name: "Gender",
        type: "radio",
        label: "Other",
        value: "Other",
      }
      ]

      const skillOptions = [
        { value: 'JavaScript', label: 'JavaScript' },
        { value: 'React', label: 'React' },
        { value: 'HTML', label: 'HTML' },
        { value: 'CSS', label: 'CSS' },
        { value: 'BootStrap', label: 'BootStrap' },
      ];
    
      const onChangeRadio = (e) => {
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        })
      }
    
    
    
      const OnChangedown = (e) => {
        let skills = [];
        if (Array.isArray(e)) {
    
          skills = (e.map(option => option.value));
        }
        setValues({
          ...values,
          skill: (skills)
        });
      }

      const getBase64 = file => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          onLoad(reader.result);
        };
      };
    
      const onLoad = file => {
        setValues({
          ...values,
          file
        })
      };
      const onChangeFile = e => {
        const files=e.target.files
        let file=files[0];
        if(file.size>1000000){
          e.target.value="";
          setValues({
            ...values,
            file:"error"
          })
        }else{
        getBase64(file)
        }
        
      };

      return(
        <div className="main">
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(values)
                dispatch(userAction(values));
            }}>
                <h1>Registration Form</h1>
                {inputs.map((input) => (
          <FormInput key={input.id}
            {...input} value={values[input.name]}
            onChange={onChange} />
        ))}
        <div>
            <label>Gender</label>
            <div className="checkinput">
            {checkInputs.map((checkInput) => (
            <RadioBtn key={checkInput.id} onChangeRadio={onChangeRadio}
              {...checkInput} />
          ))}
          </div>
        </div>
        <div >
        <label>Skills</label>
        <div className="skill">
          <DropDown Optionsopt={skillOptions} OnChangedown={OnChangedown} {...skillOptions} />
          </div>
        </div>

        <div>
          <div className="file">
          <label>Upload Photo</label>
          <FileUpload onChange={onChangeFile}
           src={values.file!==""?values.file:null}
           error_msg={values.file===""?`hide`:values.file==="error"?`error-msg`:`hide`}
          imgsize={values.file===""?`hide`:values.file==="error"?`hide`:`img-size`} />
          </div>
          </div>
        <button>Submit</button>
            </form>
        </div>
      )
}


export default Registration;