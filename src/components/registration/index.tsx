import { useRegistration } from './userRegistration'

export const initialState = {
  fname: '', lname: "",
  email: '', gender: "",
  password: '', mobile: "",
  confirmPassword: ""
}

export default function RegistrationPage() {
  const { formData, handleInputChange, handleRegistration  } = useRegistration(initialState)
  const { fname, lname, gender, email, mobile, password, confirmPassword } = formData;
  const genders = ["Male", "Female"]
  const enableSubmit = fname && lname && email && mobile && password && confirmPassword
  return (
    <div className="wrapper">
    <h3 className="title">
      Registration Form
    </h3>
    <div className="form">
       <div className="inputfield">
          <label>First Name
          <input type="text" value={fname} name="fname" className="input" onChange={handleInputChange} />
          </label>
       </div>  
        <div className="inputfield">
          <label>Last Name
          <input type="text" value={lname} name="lname" className="input" onChange={handleInputChange} />
          </label>
       </div>  
       <div className="inputfield">
          <label>Password
          <input type="password" value={password} name="password" className="input" onChange={handleInputChange} />
          </label>
       </div>  
      <div className="inputfield">
          <label>Confirm Password
          <input type="password" value={confirmPassword} name="confirmPassword" className="input" onChange={handleInputChange} />
          </label>
       </div> 
        <div className="inputfield">
          <div className="custom_select">
          <label>Gender
            <select value={gender} name='gender' key={"gender"} onChange={handleInputChange}>
            <option value={""}>Select</option>
              {genders.map((data:string)=><option key={data} value={data}>{data}</option>)}
            </select>
            </label>
          </div>
       </div> 
        <div className="inputfield">
          <label>Email Address
          <input type="text" name="email" value={email} className="input" onChange={handleInputChange} />
          </label>
       </div> 
      <div className="inputfield">
          <label>Phone Number
          <input type="text" value={mobile} name="mobile" className="input" onChange={handleInputChange} />
          </label>
       </div> 
      {/* <div className="inputfield terms">
          <label className="check">
            <input type="checkbox" checked={isAgreed} onChange={handleCheckboxChange} />
            <span className="checkmark"></span>
          </label>
          <p>Agreed to terms and conditions</p>
       </div>  */}
      <div className="inputfield">
        <input disabled={!enableSubmit} type="submit" value="Register" className={enableSubmit ? "btn" : "btn disabled"} onClick={handleRegistration} />
      </div>
      {/* <span>Already have an account? <Link to={"/login"}>click here</Link> to login.</span> */}
    </div>
</div>
  );
};

