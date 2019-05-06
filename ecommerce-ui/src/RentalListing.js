import React  from 'react';
import airbnbs from './_data/airbnbs.json';
import VacationRental from "./VacationRental"
import ShoppingCart from "./ShoppingCart"
import PropTypes from 'prop-types';


export default class RentalListing extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            airbnbsListing: airbnbs,
            selectedRantals: [],
            totalDues:0
        }
    }

    bookRental = (idx) => {
       const selectedRantals = this.state.airbnbsListing[idx];
    
       var newDues = this.state.totalDues + selectedRantals.payment.cost;
       if (this.state.selectedRantals.includes(selectedRantals)) {
         alert('You already selected that Rental.'+selectedRantals.title);
         return;
       }
      
       this.setState(prevState => {
         return {
            selectedRantals: [...prevState.selectedRantals, selectedRantals],
            totalDues: newDues
         };
       });

      }
    
    deleteRental = (idx) => {    

        this.setState(prevState => {
            const selectedRantals = [...prevState.selectedRantals];
            var newDues = this.state.totalDues - selectedRantals[idx].payment.cost;
            selectedRantals.splice(idx, 1);
      
            return {
                selectedRantals,
                totalDues: newDues
            };
          });
      }

    render() {
        const vacationRental = this.state.airbnbsListing
        .map((listing, idx) => 
        <VacationRental 
            listing={listing} 
            key={idx}
            idx={idx}
            onBookRental={this.bookRental}
        />
        );
    
        return (
            <div className="App">
            <div>
            <h5 style= {{ borderBottom : "1px solid rgb(125, 125, 125)", padding: 20, width: "100%"}}>Vacation Rentals In Shopping Cart</h5>    
            </div>
            <span>Total Dues : ${this.state.totalDues}</span>   
            <ShoppingCart
                rentals={this.state.selectedRantals}
                onDeleteRental={this.deleteRental}
            />
            <div>
            <h5 style= {{ borderBottom : "1px solid rgb(125, 125, 125)", padding: 20, width: "100%"}}>Vacation Rentals</h5>    
            
            </div>
            <div className="listings_section_listing_card">
            {vacationRental}
            </div>;
            </div>
        );
    }

}

RentalListing.propTypes = {
    airbnbsListing: PropTypes.object,
    selectedRantals: PropTypes.object,
    totalDues: PropTypes.number
};