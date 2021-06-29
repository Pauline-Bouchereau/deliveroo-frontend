import CartItem from "./CartItem";

const Cart = ({ cart, addToCart, substractFromCart }) => {
  const subtotal = 0;
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
              <span>{subtotal} euros</span>
            </div>
            <div>
              <span>Frais de livraison</span>
              <span>{deliveryFees} euros</span>
            </div>
          </div>
          <div>
            <span>Total</span>
            <span>{total} euros</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
