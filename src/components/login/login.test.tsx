import { render, screen } from "@testing-library/react"
import user from "@testing-library/user-event"

import LoginPage from "."
import { act } from "react-dom/test-utils"


const login = {
    email: "ashok@gmail.com",
    password: "password@123"
}
describe('Registraion renders', () => { 
    test('should render default', () => { 
        render(<LoginPage />)
        const headingElement = screen.getByRole("heading", { name: "Login" })
        expect(headingElement).toBeInTheDocument()

        const emailElement = screen.getByRole("textbox", { name: "Email" })
        expect(emailElement).toBeInTheDocument()

        const passwordElement = screen.getByLabelText("Password")
        expect(passwordElement).toBeInTheDocument()

        const buttonElement = screen.getByRole("button")
        expect(buttonElement).toBeDisabled()
     })

     test("should type render and enable button", async() => {
        user.setup()
        render(<LoginPage />)
        const emailElement = screen.getByRole("textbox", { name: "Email" })
        const passwordElement = screen.getByLabelText("Password")
        const buttonElement = screen.getByRole("button")
        await act(async ()=> await user.type(emailElement, login.email))
        await act(async ()=> await user.type(passwordElement, login.password))
        expect(buttonElement).toBeEnabled()
     })

 })