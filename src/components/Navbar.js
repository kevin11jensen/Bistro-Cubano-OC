import React from 'react';
import styled from 'styled-components';
import { device } from './device';

export default function NavBar() {
    return (
        
            <Nav>
                <div className = 'nav-left'>
                    
                    <p><i className="fas fa-phone"></i> (503) 387-5678</p>
                    
                    <p><i className="far fa-clock"></i> 709 Main Street Suite 101, Oregon City, OR</p>
                </div>
                <div className = 'nav-right'>
                    <a href = 'https://www.facebook.com/BistroCubanoOC/'><i className ="fab fa-facebook-f"></i></a>
                    <a href = 'https://www.yelp.com/biz/bistro-cubano-caribbean-cuisine-oregon-city'><i className ="fab fa-yelp"></i></a>
                </div>
            </Nav>    
    );
}


const Nav = styled.nav `
    background-color: var(--red);
    color: var(--white);
    font-family: var(--fontBody);
    display: flex;
    justify-content: space-around;
    font-size: .8rem;
    padding: 1% 0;
    overflow-x: hidden;
    @media ${device.tablet} {
        display: none;
    }
    @media ${device.mobileL} {
        display: none;
    }
    .nav-left {
        display: flex;
        justify-content: space-around;
        width: 33%;
    }
    .nav-right {
        display: flex;
        justify-content: space-evenly;
        width: 6%;
        a {
            color: var(--white);
        }
    }
`