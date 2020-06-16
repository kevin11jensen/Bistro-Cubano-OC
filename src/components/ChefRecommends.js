import React from 'react';
import styled from 'styled-components';


export default function ChefRecommends() {
    return (
        <Recommendations>
            <h1>Our Chefs Recommendation</h1>
            <div>
            <h4>The Cubano</h4>
            <h4>$13.95</h4>
            <p>A tasty classic! In house slow roasted pork, sweet ham, swiss cheese, dill pickles, yellow mustard and Caribbean spread. Pressed together on a toasted roll.</p>
            </div>
            <div>
            <h4>Ropa Vieja</h4>
            <h4>$18.95</h4>
            <p>Cuba's signature beef dish! Slow roasted shredded beef cooked with bell pepper, onions and green olives. Stewed in a lite garlic white wine tomato sofrito. Served with saffron rice, black beans and sweet plantains.</p>
            </div>
            <div>
            <h4>Picadillo</h4>
            <h4>$17.95</h4>
            <p>Seasoned ground beef and chorizo, green olives, bell peppers and cuban spices all stewed in our garlic white wine sofrito. Served with saffron rice, black beans and tostones.</p>
            </div>
            <div>
            <h4>Sunburnt Salmon </h4>
            <h4>$22.95</h4>
            <p>6 oz seasoned fire grilled fillet. Dressed with bell peppers, garlic cream sauce, onions and capers. Served on a bed of fresh spinach with saffron rice and cuban slaw. </p>
            </div>
            <button>EXPLORE WHOLE MENU</button>
        </Recommendations>
    );
}

const Recommendations = styled.section `

`