import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import { device } from './device';

export default function Contact() {
    return (
        <ContactSection>
            <img src = {logo} alt = 'logo' />
            <div className = 'visit-us'>
                <h5>VISIT US</h5>
                <p><i className="fas fa-phone"></i> (503) 387-5678</p>
                <p><i className = "fas fa-map-marker-alt"></i> 709 Main Street Suite 101, Oregon City, OR 97045​​</p>
                <a href = 'https://www.google.com/maps/place/Bistro+Cubano+Caribbean+Cuisine/@45.3581019,-122.6102385,17z/data=!3m1!4b1!4m5!3m4!1s0x5495714b8a7416ff:0xe020ef100f678240!8m2!3d45.3580982!4d-122.6080498'><p className = 'directions'><i className = "fas fa-directions"></i> GET DIRECTIONS</p></a>
            </div>
            <div className = 'hours'>
                <h5>OPENING HOURS</h5>
                <p>Sunday-Thursday – 11 - 9pm</p>
                <p>Fri – Sat 11am - 10pm</p>
                <p>Tuesday – Closed</p>
            </div>
            <div className = 'stay-connected'>
                <p>STAY CONNECTED</p>
                <a href = 'https://www.facebook.com/BistroCubanoOC/'>Facebook</a>
                <a href = 'https://www.yelp.com/biz/bistro-cubano-caribbean-cuisine-oregon-city'>Yelp</a>
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
    overflow-x: hidden;
    @media ${device.tablet} {
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    @media ${device.mobileL} {
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    img {
        width: 25%;
        margin-right: 2%;
        @media ${device.tablet} {
            width: 99%;
        }
        @media ${device.mobileL} {
            width: 99%;
            margin: 2%;
        }
    }
    .visit-us {
        display: flex;
        flex-direction: column;
        width: 20%;
        margin-right: 2%;
        @media ${device.tablet} {
            width: 99%;
            margin-left: 6%;
        }
        @media ${device.mobileL} {
            margin: 1%;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 99%;
        }
        h5 {
            font-weight: 800;
            color: var(--white);
            font-family: var(--fontBody);
            margin-bottom: 6%;
            @media ${device.tablet} {
                font-size: 1rem;
                width: 99%;
                margin-left: 6%;
                margin-bottom: 2%;
            }
            @media ${device.mobileL} {
                margin-bottom: 1%;
            }
        }
        p {
            font-family: var(--fontBody);
            line-height: 2rem;
            margin-right: 2%;
            @media ${device.tablet} {
                font-size: .8rem;
                width: 99%;
                margin-left: 6%;
            }
            i:hover {
                color: var(--red);
            }
            
        }
        a {
            text-decoration: none;
            @media ${device.tablet} {
                width: 99%;
                margin-left: 6%;
            }
            @media ${device.mobileL} {
                width: 99%;
            }
            .directions {
                color: var(--red);
                font-weight: 600;
                text-align: center;
                &:hover {
                    color: var(--white);
                    transform: scale(1.1);
                    transition-duration: .5s;
                }
            }
        }
        
    }
    .hours {
        display: flex;
        flex-direction: column;
        width: 20%;
        @media ${device.tablet} {
            width: 99%;
            margin-left: 15%;
            margin-bottom: 3%;
        }
        @media ${device.mobileL} {
            margin: 1%;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 99%;
        }
        h5 {
            font-weight: 800;
            color: var(--white);
            font-family: var(--fontBody);
            margin-bottom: 6%;
            @media ${device.tablet} {
                margin-bottom: 2%;
            }
            @media ${device.mobileL} {
                margin-bottom: 1%;
            }
        }
        p {
            font-family: var(--fontBody);
            line-height: 2rem;
            margin-right: 2%;
            @media ${device.tablet} {
                font-size: .8rem;
                
            }
        }
    }
    .stay-connected {
        display: flex;
        flex-direction: column;
        width: 20%;
        @media ${device.tablet} {
            width: 99%;
            margin-left: 15%;
        }
        @media ${device.mobileL} {
            margin: 1%;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 99%;
        }
        p{
            font-family: var(--fontBody);
            font-weight: 800;
            margin-bottom: 6%;
            @media ${device.tablet} {
                margin-bottom: 1%;
            }
            @media ${device.mobileL} {
                margin-bottom: 1%;
            }
        }
        a {
            
            font-family: var(--fontBody);
            line-height: 2rem;
            margin-right: 2%;
            text-decoration: none;
            color: var(--white);
            @media ${device.tablet} {
                font-size: .8rem;
            }
            &:hover {
                color: var(--red);
            }
        }
    }
`