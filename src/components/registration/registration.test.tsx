import { render, renderHook, screen } from "@testing-library/react"
import user from "@testing-library/user-event"
import RegistrationPage, { initialState } from "."
import { useRegistration, UserRegistrationT } from "./userRegistration"
import { act } from "react-dom/test-utils"

const testData: UserRegistrationT = {
    fname: "Ashokkumar",
    lname: "K",
    email: "ashok@gmail.com",
    mobile: "9876543210",
    gender: "Male",
    password: "password@123",
    confirmPassword: "password@123"
}

describe('Registraion renders', () => { 
    test('should render default', () => { 
        render(<RegistrationPage />)
        const headingElement = screen.getByRole("heading", { name: "Registration Form" })
        expect(headingElement).toBeInTheDocument()

        const fNameElement = screen.getByRole("textbox", { name: "First Name" })
        expect(fNameElement).toBeInTheDocument()

        const lNameElement = screen.getByRole("textbox", { name: "Last Name" })
        expect(lNameElement).toBeInTheDocument()

        const passwordElement = screen.getByLabelText("Password")
        expect(passwordElement).toBeInTheDocument()

        const confirmPasswordElement = screen.getByLabelText(/confirm password/i)
        expect(confirmPasswordElement).toBeInTheDocument()

        const genderElement = screen.getByRole("combobox", { name: "Gender" })
        expect(genderElement).toBeInTheDocument()

        const emailElement = screen.getByRole("textbox", { name: "Email Address" })
        expect(emailElement).toBeInTheDocument()

        const mobileElement = screen.getByRole("textbox", { name: "Phone Number" })
        expect(mobileElement).toBeInTheDocument()

        const submitButton = screen.getByRole("button")
        expect(submitButton).toBeDisabled()
     })

     test('should render user update', async () => { 
        user.setup()
        render(<RegistrationPage />)
        const fNameElement = screen.getByRole("textbox", { name: "First Name" })
        const lNameElement = screen.getByRole("textbox", { name: "Last Name" })
        const passwordElement = screen.getByLabelText("Password")
        const confirmPasswordElement = screen.getByLabelText("Confirm Password")
        const genderElement = screen.getByRole("combobox", { name: "Gender" })
        const emailElement = screen.getByRole("textbox", { name: "Email Address" })
        const mobileElement = screen.getByRole("textbox", { name: "Phone Number" })
        const submitButton = screen.getByRole("button")
        // await user.type(fNameElement, "Ashokkumar")
        // await user.type(lNameElement, "K")
        // await user.type(passwordElement, "password@123")
        // await user.type(confirmPasswordElement, "password@123")
        // await user.selectOptions(genderElement, "Male")
        // await user.type(emailElement, "ashok@gmail.com")
        // await user.type(mobileElement, "9876543210")
        // expect(submitButton).toBeEnabled()
      })
 })

 describe('UseRegistration Hook', () => { 

    test("should render default", () => {
        const { result } = renderHook(()=>useRegistration(initialState))
        expect(result.current.formData.fname).toBe("")
    })

    test("should render with test data", () => {
        const { result } = renderHook(()=>useRegistration(testData))
        expect(result.current.formData.email).toBe("ashok@gmail.com")
    })

    test("should render with test data with submit", () => {
        const { result } = renderHook(useRegistration, {
            initialProps: testData
        })
        act(()=>result.current.handleRegistration({preventDefault: jest.fn()}as unknown as React.FormEvent))
        expect(result.current.registeredUser).toBeTruthy()
    })
  })