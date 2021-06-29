const CartItem = ({ item, addToCart, substractFromCart }) => {
  return (
    <div>
      <button
        onClick={() => {
          substractFromCart(item);
        }}
      >
        -
      </button>
      <span>{item.quantity}</span>
      <button
        onClick={() => {
          addToCart(item);
        }}
      >
        +
      </button>
      <span>{item.title}</span>
      <span>{item.price}</span>
    </div>
  );
};
export default CartItem;
