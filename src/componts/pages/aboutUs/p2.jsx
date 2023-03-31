import React, { Component } from 'react';
import './aboutUs.css'
class Page2 extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div class="card-group cg">
  <div class="card">
    <img class="card-img-top " src="https://assets.nicepagecdn.com/11a8ddce/4267640/images/juicy-steak-medium-rare-beef-with-spices-grilled-vegetables.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Meat</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top " src="https://assets.nicepagecdn.com/11a8ddce/4267640/images/juicy-steak-medium-rare-beef-with-spices-grilled-vegetables.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Meat</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top " src="https://assets.nicepagecdn.com/11a8ddce/4267640/images/juicy-steak-medium-rare-beef-with-spices-grilled-vegetables.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Meat</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
</div>);
    }
}
 
export default Page2;