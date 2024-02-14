import { useContext } from 'react';

import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg'; 

import { CartContext } from '../../context/cart.context';

import { CartIconContainer, ShoppingIconContainer, ItemCount } from './cart-icon.styles.jsx';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIconContainer />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
};

export default CartIcon;