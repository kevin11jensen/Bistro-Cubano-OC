import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';

export default function HeroNav() {
    return (
        
            <MainNav>
                <img src = {logo} alt = 'logo' />
                <div>
                    <h3>Home</h3>
                    <h3>Menu</h3>
                    <h3>About Us</h3>
                    <h3>Reviews</h3>
                </div>
            </MainNav>
            
        
    );
}

const MainNav = styled.nav `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1%;
    img {
        width: 25%;
        padding: 1%;
    }
    div {
        display: flex;
        justify-content: space-around;
        width: 50%;
        h3 {
            font-family: var(--fontMain);
            color: var(--white);
            font-size: 2rem;
            padding-top: 1%;
            &:hover {
                color: var(--red);
            }
        }
    }
`