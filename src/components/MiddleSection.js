import React from 'react';
import styled from 'styled-components';

import sandwhich from '../images/sandwhich.jpg';
import staffBistro from '../images/Staff-bistro.jpg';
import oregonCity from '../images/Oregon-city.jpg';

export default function MiddleSection() {
    return (
        <MiddleContainer>
            <div className = 'middle-header'>
                <h2>Experience Cuba in the Northwest</h2>
                <h4>WE BRING YOU TRUE FAMILY RECIPES THAT HAVE BEEN PASSED DOWN FOR GENERATIONS.</h4>
            </div>
            <div className = 'sandwich'>
                <img src = {sandwhich} alt = 'Cuban Sandwich' />
                <h2>Cuban cuisine right to your table</h2>
                <p>As a family, we find ourselves lucky to be able to combine fresh local Pacific Northwest ingredients with the flavor, spices, love, and appreciation for Caribbean culture.</p>
            </div>
            <div>
                <img src = {staffBistro} alt = 'staff' />
                <h2>Our Staff</h2>
                <p>Bienvenidos, and thank you for joining us! Whether you are family, friend or a new acquaintance we are happy to have you.</p>
            </div>
            <div>
                <img src = {oregonCity} alt = 'store front' />
                <h2>In the heart of Old Town Oregon City</h2>
                <p>Oregon City Maint Street is the embodiment of what it means to be a Main Street. It brings the Oregon City community together and we have the great opportunity to give you a great Cuban experience.</p>
                <button>DIRECTIONS</button>
            </div>
        </MiddleContainer>
    );
}

const MiddleContainer = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--bg);
    .middle-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-bottom: .5rem dotted var(--red);
        color: var(--white);
        width: 75%;
        h2 {
            font-family: var(--fontMain);
            padding: 1%;
            text-align: center;
            font-size: 3rem;
            
        }
        h4 {
            font-family: var(--fontBody);
            padding: 3%;
            text-align: center;
        }
    }
    .sandwich {
        display: flex;
    }
`