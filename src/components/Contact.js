import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';

export default function Contact() {
    return (
        <ContactSection>
            <img src = {logo} alt = 'logo' />
            <div className = 'visit-us'>
                <h5>VISIT US</h5>
                <p>(503) 387-5678</p>
                <p>709 Main Street Suite 101, Oregon City, OR 97045​​</p>
                <p>GET DIRECTIONS</p>
            </div>
            <div className = 'hours'>
                <h5>OPENING HOURS</h5>
                <p>Sunday-Thursday – 11-9pm</p>
                <p>Fri – Sat 11am- 10pm</p>
                <p>Tuesday – Closed</p>
            </div>
            <div className = 'stay-connected'>
                <p>STAY CONNECTED</p>
                <a href = ''>Facebook</a>
                <a href = ''>Yelp</a>
            </div>
        </ContactSection>
    );
}

const ContactSection = styled.section `
    background-color: black;
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 5%;
    padding-bottom: 2%;
    img {
        width: 25%;
        margin-right: 2%;
    }
    .visit-us {
        display: flex;
        flex-direction: column;
        width: 20%;
        margin-right: 2%;
        h5 {
            font-weight: 800;
            color: var(--white);
            font-family: var(--fontBody);
            margin-bottom: 1%;
        }
        p {
            font-family: var(--fontBody);
            line-height: 2rem;
            margin-right: 2%;
        }
    }
    .hours {
        display: flex;
        flex-direction: column;
        width: 20%;
        h5 {
            font-weight: 800;
            color: var(--white);
            font-family: var(--fontBody);
            margin-bottom: 1%;
        }
        p {
            font-family: var(--fontBody);
            line-height: 2rem;
            margin-right: 2%;
        }
    }
    .stay-connected {
        display: flex;
        flex-direction: column;
        width: 20%;
        p{
            font-family: var(--fontBody);
            font-weight: 800;
        }
        a {
            
            font-family: var(--fontBody);
            line-height: 2rem;
            margin-right: 2%;
            text-decoration: none;
            color: var(--white);
        }
    }
`