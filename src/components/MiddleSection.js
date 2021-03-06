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
    overflow-x: hidden;
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
            @media ${device.mobileL} {
                font-size: 1.8rem;
                width: 90%;
            }
        }
        h4 {
            font-family: var(--fontBody);
            padding: 3% 3% 5% 3%;
            text-align: center;
            letter-spacing: .3rem;
            width: 75%;
            font-weight: 600;
            border-bottom: .3rem dotted var(--red);
            line-height: 1.5rem;
            @media ${device.mobileL} {
                font-size: .8rem;
                width: 96%;
                line-height: 1.2rem;
            }
        }
    }
    .sandwich {
        display: flex;
        width: 75%;
        justify-content: space-around;
        img {
            @media ${device.tablet} {
                width: 99%;
            }
            @media ${device.mobileL} {
                width: 99%;
            }
        }
        @media ${device.tablet} {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        @media ${device.mobileL} {
            font-size: 1.6rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 99%;
        }
        .sandwhich-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            width: 40%;
            @media ${device.tablet} {
                width: 90%;
            }
            @media ${device.mobileL} {
                width: 90%;
                text-align: left;
                margin-left: 6%;
            }
            h2 {
                font-family: var(--fontMain);
                font-size: 4rem;
                margin: 2%;
                padding-bottom: 2%;
                @media ${device.tablet} {
                    font-size: 2rem;
                }
                @media ${device.mobileL} {
                    font-size: 1.6rem;
                    width: 99%;
                    margin-left: 6%;
                    padding-bottom: 0;
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
                @media ${device.mobileL} {
                    font-size: .8rem;
                    margin-left: 3%;
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
            @media ${device.tablet} {
                width: 90%;
            }
            @media ${device.mobileL} {
                width: 99%;
            }
        }

        @media ${device.tablet} {
            width: 99%;
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
        }
        @media ${device.mobileL} {
            font-size: 1.6rem;
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
            width: 99%;
        }
        .staff-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            
            width: 40%;
            @media ${device.tablet} {
                width: 90%;
                align-items: center;
            }
            @media ${device.mobileL} {
                width: 90%;
                text-align: left;
                margin-left: 6%;
            }
            h2 {
                font-family: var(--fontMain);
                font-size: 4rem;
                margin: 3% 3% 3% 10%;
                text-align: left;
                padding-bottom: 2%;
                @media ${device.tablet} {
                    font-size: 2rem;
                    
                }
                @media ${device.mobileL} {
                    font-size: 1.6rem;
                    
                    margin: 2% 2% 0 0;
                    padding-bottom: 0;
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
                @media ${device.mobileL} {
                    font-size: .8rem;
                    
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
            @media ${device.tablet} {
                width: 99%;
            }
            @media ${device.mobileL} {
                width: 99%;
            }
        }
        @media ${device.tablet} {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        @media ${device.mobileL} {
            font-size: 1.6rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 99%;
        }
        .oregoncity-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 40%;
            @media ${device.tablet} {
                width: 90%;
            }
            @media ${device.mobileL} {
                width: 90%;
                text-align: left;
                margin-left: 3%;
            }
            
            h2 {
                font-family: var(--fontMain);
                font-size: 4rem;
                margin: 2%;
                padding-bottom: 2%;
                @media ${device.tablet} {
                    font-size: 2rem;
                }
                @media ${device.mobileL} {
                    font-size: 1.6rem;
                    
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
                @media ${device.mobileL} {
                    font-size: .8rem;
                    
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
                @media ${device.tablet} {
                    font-size: 1rem;
                    padding: 5% 8%;
                    margin: 6% 0 11% 0;
                }
                @media ${device.mobileL} {
                    font-size: 1rem;
                    padding: 5% 8%;
                    margin: 6% 0 11% 0;
                }
                &:hover {
                    background-color: var(--red);
                    transition-duration: .5s;
                }
            }
        }
    }
`