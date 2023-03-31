import React, { Component } from 'react';
import BestCardOffer from '../BestCardOffer/bestCardOffer';
import './home.css'
class Page1 extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <div className='home-card'>
          
        <div className='contaner-content'>
          <div className='ch'>
          <div className='home-title'>
               <h1>The Fastest Food Delivery in <span>Accra</span> </h1> 
          </div>
          <div className='home-content'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nam delectus sed, vel quaerat, libero nesciunt debitis, architecto repudiandae accusamus aut exercitationem nisi non doloribus! Temporibus officia architecto reiciendis blanditiis.
          </div>
          <button type="button" class="btn btn-warning">Order Now</button>
          </div>
        </div>

        <div className='contaner-Offers' >
            <BestCardOffer 
            urlImage='https://zone-restaurant.vercel.app/static/media/f5.1929b818c42f7c556b01.png' 
            title='Strawberries'  
            discrption= 'Fresh Strawberries'
            price=' 7.5'
            />
            <BestCardOffer 
            urlImage='https://zone-restaurant.vercel.app/static/media/i1.3d9b129d2c5432c6f1fb.png' 
            title='Icream'  
            discrption= 'Chocolate & Vanila'
            price=' 5.25'
            />
        <BestCardOffer 
        

        
            urlImage='https://zone-restaurant.vercel.app/static/media/c3.55f83414f33f66456b35.png' 
            title='Chicken'  
            discrption= 'Mixed Kebab'
            price=' 10.25'
            />
            


            <BestCardOffer 
            urlImage='https://zone-restaurant.vercel.app/static/media/fi3.80deaafbc1e0520c58e6.png' 
            title='Tilapia'  
            discrption= 'Roasted Tilapia'
            price=' 20.12'
            />
        </div>
    
    </div> 

        );
    }
}
 
export default Page1;