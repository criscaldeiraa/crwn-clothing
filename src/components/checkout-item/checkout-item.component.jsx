import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import { CheckoutIemContainer, ImageContainer, Image, ItemProperties, Quantity, Arrow, Value, RemoveButton } from './checkout-item.styles.jsx';

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);
    const clearItemHandler = () => clearItemFromCart(cartItem);

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