import { UseDispatch, useDispatch, useSelector } from 'react-redux';

import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector.js';
import { setIsCartOpen } from '../../store/cart/cart.action.js';

import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg'; 

import { CartIconContainer, ShoppingIconContainer, ItemCount } from './cart-icon.styles.jsx';

const CartIcon = () => {
    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);


    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIconContainer />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
};

export default CartIcon;