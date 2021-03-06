import React from 'react';
import styled from 'styled-components';
import { device } from './device';

export default function ChefRecommends() {
    return (
        <Recommendations>
            <h1>Our Chefs Recommendation</h1>
            <div className = 'cubano'>
                <div className = 'info'>
                    <h4>The Cubano <span> ...................................................................................</span></h4>
                    <h4>$13.95</h4>
                </div>
                <p>A tasty classic! In house slow roasted pork, sweet ham, swiss cheese, dill pickles, yellow mustard and Caribbean spread. Pressed together on a toasted roll.</p>
            </div>
            <div className = 'cubano'>
                <div className = 'info'>
                    <h4>Ropa Vieja <span> .....................................................................................</span></h4>
                    
                    <h4>$18.95</h4>
                </div>
                <p>Cuba's signature beef dish! Slow roasted shredded beef cooked with bell pepper, onions and green olives. Stewed in a lite garlic white wine tomato sofrito. Served with saffron rice, black beans and sweet plantains.</p>
            </div>
            <div className = 'cubano'>
                <div className = 'info'>
                    <h4>Picadillo <span> .........................................................................................</span></h4>
                    <h4>$17.95</h4>
                </div>
                <p>Seasoned ground beef and chorizo, green olives, bell peppers and cuban spices all stewed in our garlic white wine sofrito. Served with saffron rice, black beans and tostones.</p>
            </div>
            <div className = 'cubano'>
                <div className = 'info'>
                    <h4>Sunburnt Salmon <span> ...........................................................................</span></h4>
                    <h4>$22.95</h4>
                </div>
                <p>6 oz seasoned fire grilled fillet. Dressed with bell peppers, garlic cream sauce, onions and capers. Served on a bed of fresh spinach with saffron rice and cuban slaw. </p>
            </div>
            <div className = 'menu-button'>
                <button>EXPLORE WHOLE MENU</button>
            </div>
        </Recommendations>
    );
}

const Recommendations = styled.section `
    background-color: black;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h1 {
        font-family: var(--fontMain);
        font-size: 3.5rem;
        text-align: left;
        padding: 6% 8% 2% 0;
        @media ${device.tablet} {
            font-size: 3rem;

        }
        @media ${device.mobileL} {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 2%;
        }
    }
    h4 {
        font-family: var(--fontMain);
        font-size: 1.6rem;
        @media ${device.tablet} {
            font-size: 1.2rem;
            text-align: left;
        }
        @media ${device.mobileL} {
            text-align: center;
            font-size: 1.2rem;
        }
        span {
            color: var(--red);
            @media ${device.mobileL} {
                display: none;
            }
        }
    }
    .cubano {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 75%;
        @media ${device.tablet} {
            width: 90%;
        }
        .info {
            display: flex;
            justify-content: space-between;
            width: 70%;
            @media ${device.tablet} {
                width: 90%;
            }
        }
        p {
            font-family: var(--fontBody);
            line-height: 2rem;
            width: 70%;
            padding-bottom: 2%;
            @media ${device.tablet} {
                width: 90%;
            }
            @media ${device.mobileL} {
                margin-bottom: 3%;
            }
        }
    }
    .menu-button {
        display: flex;
        justify-content: center;
        width: 50%;
        @media ${device.tablet} {
            width: 99%;
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
                padding: 6% 9%;
                margin: 6% 0 11% 0;
                
            }
            &:hover {
                background-color: var(--red);
                transition-duration: .5s;
            }
        }
    }
`