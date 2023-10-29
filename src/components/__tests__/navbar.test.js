import { MemoryRouter } from "react-router-dom";
import App from "../../App";
import { screen, cleanup, render, fireEvent } from "@testing-library/react";

beforeAll(()=>{
})

test('should render Navbar and Homepage',()=>{
    render( <App/>)
    
    const navElement= screen.getByTestId('navbar')
    expect(navElement).toBeInTheDocument()
    const homeEl = screen.getByTestId('homepage')
    expect(homeEl).toBeInTheDocument()
})

// data-testid='nav-search'

test('should select City Search from Nav bar and render City Search Page',()=>{
    render(<App/>)
    const navElement= screen.getByTestId('navbar')
    expect(navElement).toBeInTheDocument()
    const homeEl = screen.getByTestId('homepage')
    expect(homeEl).toBeInTheDocument()
    const citySearchNavbarLink = screen.getByTestId('nav-search')
    fireEvent.click(citySearchNavbarLink)
    // const citySearchElement = screen.findByTestId(nav);
    const cityPageElement = screen.getByTestId('city-search')
    // expect()
    expect(citySearchNavbarLink).toBeInTheDocument()
    expect(homeEl).not.toBeInTheDocument()

})