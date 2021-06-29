import CartItem from "./CartItem";

const Cart = ({ cart, addToCart, substractFromCart }) => {
  let subtotal = 0;
  for (let i = 0; i < cart.length; i++) {
    subtotal += Number(cart[i].price) * cart[i].quantity;
  }
  const deliveryFees = 2.5;
  const total = subtotal + deliveryFees;
  console.log(cart);
  return (
    <div className="container cart">
      <button
        disabled={cart.length === 0 ? true : false}
        className={cart.length === 0 ? "disabled" : ""}
      >
        Valider mon panier
      </button>

      <div>
        {cart.length === 0 ? (
          <p>Votre panier est vide</p>
        ) : (
          cart.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={item}
                addToCart={addToCart}
                substractFromCart={substractFromCart}
              />
            );
          })
        )}
      </div>
      {cart.length > 0 && (
        <div>
          <div>
            <div>
              <span>Sous-Total</span>
              <span>{subtotal.toFixed(2)} euros</span>
            </div>
            <div>
              <span>Frais de livraison</span>
              <span>{deliveryFees.toFixed(2)} euros</span>
            </div>
          </div>
          <div>
            <span>Total</span>
            <span>{total.toFixed(2)} euros</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
