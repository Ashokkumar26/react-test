import { useState } from "react";

export type UserRegistrationT = {
    fname: string,
    lname: string,
    email: string,
    mobile: string,
    password: string,
    confirmPassword: string
    gender: string
}

export const useRegistration = (initialState: UserRegistrationT) => {
      const [formData, setFormData] = useState(initialState);
      const [registeredUser, setRegisteredUser] = useState(false) 
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
      const handleRegistration = (e: React.FormEvent) => {
        e.preventDefault();
        let userData = localStorage.getItem("users")
        if(userData) {
          JSON.parse(userData)
          localStorage.setItem("users", JSON.stringify([...JSON.parse(userData), formData]))
        } else {
          localStorage.setItem("users", JSON.stringify([formData]))
        }
        setRegisteredUser(true)
        setFormData(initialState)
      };
      return { formData, registeredUser, handleInputChange, handleRegistration  }
}
