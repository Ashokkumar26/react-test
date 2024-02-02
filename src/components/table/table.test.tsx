import { render, screen } from "@testing-library/react"
import UserTable from "."

describe("Table Render", ()=> {
    test('should render default', () => { 
        render(<UserTable />)
        const columnheader1 = screen.getByRole("columnheader", { name: "S.No" })
        expect(columnheader1).toBeInTheDocument()

        const columnheader2 = screen.getByRole("columnheader", { name: "S.No" })
        expect(columnheader2).toBeInTheDocument()

        const columnheader3 = screen.getByRole("columnheader", { name: "Username" })
        expect(columnheader3).toBeInTheDocument()

        const columnheader4 = screen.getByRole("columnheader", { name: "Full Name" })
        expect(columnheader4).toBeInTheDocument()

        const columnheader5 = screen.getByRole("columnheader", { name: "Email" })
        expect(columnheader5).toBeInTheDocument()
     })
})