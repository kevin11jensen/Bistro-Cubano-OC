import React from 'react';
import styled from 'styled-components';
import { device } from './device';
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
                <div className = 'sandwhich-text'>
                    <h2>Cuban cuisine right to your table</h2>
                    <p>As a family, we find ourselves lucky to be able to combine fresh local Pacific Northwest ingredients with the flavor, spices, love, and appreciation for Caribbean culture.</p>
                </div>
            </div>
            <div className = 'staff'>
                
                <div className = 'staff-text'>
                    <h2>Our Staff</h2>
                    <p>Bienvenidos, and thank you for joining us! Whether you are family, friend or a new acquaintance we are happy to have you.</p>
                </div>
                <img src = {staffBistro} alt = 'staff' />
            </div>
            <div className = 'oregonCity'>
                <img src = {oregonCity} alt = 'store front' />
                <div className = 'oregoncity-text'>
                    <h2>In the heart of Old Town Oregon City</h2>
                    <p>Oregon City Maint Street is the embodiment of what it means to be a Main Street. It brings the Oregon City community together and we have the great opportunity to give you a great Cuban experience.</p>
                    
                    <button>DIRECTIONS</button>
                    
                </div>
                
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
    padding-bottom: 6%;
    .middle-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        color: var(--white);
        width: 75%;
        margin-bottom: 5%;
        h2 {
            font-family: var(--fontMain);
            padding: 7% 1% 1% 1%;
            text-align: center;
            font-size: 4rem;
            
        }
        h4 {
            font-family: var(--fontBody);
            padding: 3% 3% 5% 3%;
            text-align: center;
            letter-spacing: .3rem;
            width: 75%;
            font-weight: 600;
            border-bottom: .3rem dotted var(--red);
        }
    }
    .sandwich {
        display: flex;
        width: 75%;
        justify-content: space-around;
        img {
            @media ${device.tablet} {
                width: 60%;
            }
        }
        
        .sandwhich-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 40%;
            
            h2 {
                font-family: var(--fontMain);
                font-size: 4rem;
                margin: 2%;
                padding-bottom: 2%;
                @media ${device.tablet} {
                    font-size: 2rem;
                }
            }
            p {
                font-family: var(--fontBody);
                margin: 3%;
                line-height: 2rem;
                font-weight: 600;
                @media ${device.tablet} {
                    font-size: 1rem;
                }
            }
        }
    }
    .staff {
        display: flex;
        width: 75%;
        justify-content: space-around;
        img {
            width: 49%;
            
        }
        .staff-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            
            width: 40%;
            h2 {
                font-family: var(--fontMain);
                font-size: 4rem;
                margin: 3% 3% 3% 10%;
                text-align: left;
                padding-bottom: 2%;
                @media ${device.tablet} {
                    font-size: 2rem;
                }
            }
            p {
                font-family: var(--fontBody);
                margin: 5% 5% 5% 10%;
                line-height: 2rem;
                font-weight: 600;
                @media ${device.tablet} {
                    font-size: 1rem;
                }
            }
        }
    }
    .oregonCity {
        display: flex;
        width: 75%;
        justify-content: space-around;
        img {
            width: 44%;
        }
        .oregoncity-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 40%;
            h2 {
                font-family: var(--fontMain);
                font-size: 4rem;
                margin: 2%;
                padding-bottom: 2%;
                @media ${device.tablet} {
                    font-size: 2rem;
                }
            }
            p {
                font-family: var(--fontBody);
                margin: 3%;
                line-height: 2rem;
                font-weight: 600;
                @media ${device.tablet} {
                    font-size: 1rem;
                }
            }
            button {
                font-family: var(--fontBody);
                background: none;
                border: 1px solid var(--red);
                color: var(--white);
                padding: 2% 4%;
                font-size: 1rem;
                margin: 2%;
                font-weight: 600;
                &:hover {
                    background-color: var(--red);
                    transition-duration: .5s;
                }
            }
        }
    }
`