import React  from 'react';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';

export default class VacationRental extends React.Component {

render() {
    const idx = this.props.idx;
    const style = { display: this.props.listing.host.isSuperhost  ? 'block' : 'none'};
    const rental = this.props.listing;
     return(
         
        <div className="listing">
        <div className="listing_image">
        <img className="rental_image" src={rental.image} alt="rental-img"/>
        </div>
        <div className="listing_text">
        <div>

        </div>
        <div className="listing_type">
        <p className="a">{rental.houseType} . {rental.location.city} </p>
        </div>
       
        <div className="listing_name">
         <p className="b"> {this.props.listing.title}</p>
        </div>
       
        <div className="listing_price">
        <p className="c"> {rental.payment.cost} per night . {rental.payment.description}</p>
       </div>

       <div className="listing_rating">

       <StarRatingComponent 
          name="ratings" 
          value={rental.rating.stars}
        />&nbsp;
        <span className="c">{rental.rating.reviews}</span> 

        </div>

      
       <div className="listing_host">
        <p className="d">{rental.host.name} <span style={style}>Superhost</span></p> 
        </div>
        <div>
        <button onClick={() => this.props.onBookRental(idx)}>Book</button>
        </div>
        </div>
        </div>
    ); 
}

}

VacationRental.propTypes = {
    listing: PropTypes.object
};