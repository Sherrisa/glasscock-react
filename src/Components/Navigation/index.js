import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false,
        };
    }

    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen,
        });
    }

    render() {
      return (
        <Navbar  
          className="navbar navbar-expand-sm" 
          expand="md"
          dark
        >   
          <NavbarBrand className="mr-auto" href="/">
            Leah Glasscock Photography
          </NavbarBrand> 
          
          <div>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse 
              isOpen={this.state.isNavOpen} 
              navbar
            >
              <Nav 
                className="me-auto" 
                navbar
              >
                
                <NavItem>
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/investment">
                    Investment
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/portfolio">
                    Portfolio
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </NavItem>
              
              </Nav>
            </Collapse>
          </div> 

        </Navbar>
        );
    }
}

export default Navigation;
