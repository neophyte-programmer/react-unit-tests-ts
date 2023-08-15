import Home from "@/app/page"
import { render, screen } from "@testing-library/react"

describe("Home Page - Rendering", () => {
    it("should have Home Page test", () => {
        render(<Home />)
        expect(screen.getByText("Home Page")).toBeInTheDocument()
    })

    it("should have button with text Click me", () => {
        render(<Home />)
        expect(screen.getByRole("button", { name: "Click Me" })).toBeInTheDocument()
    })

    it("should have input field with label Enter your name", () => {
        render(<Home />)
        expect(screen.getByLabelText("Enter your name")).toBeInTheDocument()
    })
    it("should have input field with label Enter your age", () => {
        render(<Home />)
        // using regex expression to match the label text
        expect(screen.getByLabelText(/age/)).toBeInTheDocument()
    })
    it("should have input field with placeholder Search", () => {
        render(<Home />)
        expect(screen.getByPlaceholderText(/Search/)).toBeInTheDocument()
    })
})