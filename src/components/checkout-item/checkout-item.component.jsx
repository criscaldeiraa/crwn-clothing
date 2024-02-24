import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cart.action.js';

import { CheckoutIemContainer, ImageContainer, Image, ItemProperties, Quantity, Arrow, Value, RemoveButton } from './checkout-item.styles.jsx';
import { selectCartItems } from '../../store/cart/cart.selector.js';

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));

    return (
        <CheckoutIemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <ItemProperties> {name} </ItemProperties>
            <Quantity> 
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <ItemProperties> {price} </ItemProperties>
            <RemoveButton onClick={clearItemHandler} >&#10005;</RemoveButton> 
        </CheckoutIemContainer>
    )
}

export default CheckoutItem;