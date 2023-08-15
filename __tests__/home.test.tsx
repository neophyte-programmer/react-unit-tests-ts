import Home from "@/app/page"
import { render, screen } from "@testing-library/react"

describe("Home Page - Rendering", () => {
    it("should have Home Page test", () => {
        render(<Home />)
        expect(screen.getByText("Home Page")).toBeInTheDocument()
    })
})