import CartItem from "./CartItem";

const Cart = ({ cart, addToCart, substractFromCart }) => {
  let subtotal = 0;
  for (let i = 0; i < cart.length; i++) {
    subtotal += Number(cart[i].price) * cart[i].quantity;
  }
  const deliveryFees = 2.5;
  const total = subtotal + deliveryFees;

  return (
    <div className="container cart">
      <button
        disabled={cart.length === 0 ? true : false}
        className={cart.length === 0 ? "disabled" : ""}
      >
        Valider mon panier
      </button>

      <div className={cart.length !== 0 ? "full-cart" : ""}>
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
              <p>Sous-Total</p>
              <p>{subtotal.toFixed(2)} €</p>
            </div>
            <div>
              <p>Frais de livraison</p>
              <p>{deliveryFees.toFixed(2)} €</p>
            </div>
          </div>
          <div>
            <p>Total</p>
            <p>{total.toFixed(2)} €</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
