import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';

export default function Contact() {
    return (
        <ContactSection>
            <img src = {logo} alt = 'logo' />
            <div className = 'visit-us'>
                <p>VISIT US</p>
                <p>(503) 387-5678</p>
                <p>709 Main Street Suite 101, Oregon City, OR 97045​​</p>
                <p>GET DIRECTIONS</p>
            </div>
            <div className = 'hours'>
                <p>Sunday-Thursday – 11-9pm</p>
                <p>Fri – Sat 11am- 10pm</p>
                <p>Tuesday – Closed</p>
            </div>
            <div className = 'stay-connected'>
                <a href = ''>Facebook</a>
                <a href = ''>Yelp</a>
            </div>
        </ContactSection>
    );
}

const ContactSection = styled.section `
    background-color: black;
    display: flex;
    width: 75%;
    img {
        width: 25%;
    }
    .visit-us {
        display: flex;
        flex-direction: column;
        width: 20%;
    }
    .hours {
        display: flex;
        flex-direction: column;
        width: 20%;
    }
    .stay-connected {
        display: flex;
        flex-direction: column;
        width: 20%;
    }
`