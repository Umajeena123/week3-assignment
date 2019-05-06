import React  from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCart extends React.Component {
    render() {
        const rentalList = this.props.rentals
            .map((rental, idx) => {
                return (
                    <li key={idx}>
                        <span>{rental.title}</span>
                        &nbsp; &nbsp;<button onClick={() => this.props.onDeleteRental(idx)}>Delete</button>
                    </li>
                );
            });

        return (
            <div>
                
                <ul>
                    {rentalList}
                </ul>
            </div>
        );
    }

}

ShoppingCart.propTypes = {
    rentalList: PropTypes.object
};