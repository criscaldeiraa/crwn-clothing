import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';


import { CartDropdownContainer, CartItemsContainer } from './cart-dropdown.styles.js';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </CartItemsContainer>
            <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
        </CartDropdownContainer>
    )
};

export default CartDropdown;