import React, { useState } from 'react';

type FormData = {
  email: string,
  password: string
}
export default function LoginPage() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formData;
   let userData = localStorage.getItem("users"), user = null
   if(userData) {
    user = JSON.parse(userData).find((user: FormData) => user.email === email && user.password === password)
   }
  };

  const { email, password } = formData;
const enableButton = email && password
  return (
    <div className="wrapper">
    <h3 className="title">
      Login
    </h3>
    <div className="form">
       <div className="inputfield">
          <label>Email
          <input type="text" value={email} name="email" className="input" onChange={handleInputChange} />
          </label>
       </div>  
        <div className="inputfield">
          <label>Password
          <input type="text" value={password} name="password" className="input" onChange={handleInputChange} />
          </label>
       </div>
       <div className="inputfield">
        <input disabled={!enableButton} type="submit" value="Login" className={enableButton ? "btn" : "btn disabled"} onClick={handleLogin} />
      </div>
       </div>
       </div>
  );
};
