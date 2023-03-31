import NavBar from '../../nav.css';
import './bestCardOffer.css'
const BestCardOffer= (props)=>{
    return (
        <div className='card-offer zoom-in-out'>
                <div className='ima-card'>
                <img src={props.urlImage} width={'200px'} />
                </div>
                <h5>{props.title}</h5>
                <div className='card-dis'>
                <h5>{props.discrption}</h5>
                </div>
                <span>$</span>{props.price}
            </div>
    );
}

export default BestCardOffer;