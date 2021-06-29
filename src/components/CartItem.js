const CartItem = ({ item, addToCart, substractFromCart }) => {
  return (
    <div className="cart-item">
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
        <p>{item.title}</p>
      </div>
      <span>{item.price} €</span>
    </div>
  );
};
export default CartItem;
