import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

// Using a regular stateless component
const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>Go to checkout</CustomButton>
    </div>
)

export default CartDropdown;