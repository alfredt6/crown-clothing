import React from 'react';

import CustomButton from '../custom-button/CustomButton.component';

import './cartdropdown.styles.scss';


const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown;