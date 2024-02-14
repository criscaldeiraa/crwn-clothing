import { CartItemContainer, ItemImage, ItemDetails, ItemName } from './cart-item.styles.jsx';

const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <CartItemContainer>
            <ItemImage src={imageUrl} alt={`${name}`} /> 
            <ItemDetails>
                <ItemName>{name}</ItemName><br />
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;

