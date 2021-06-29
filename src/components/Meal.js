import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import deliverooLogoSquare from "../assets/img/logo-deliveroo-square.png";

const Meal = ({ addToCart, meal }) => {
  return (
    <div
      className="meal-vignette"
      onClick={() => {
        addToCart(meal);
      }}
    >
      <div>
        <h3>{meal.title}</h3>
        <p>{meal.description}</p>
        <div>
          <span>{meal.price} €</span>
          {meal.popular && (
            <span className="orange">
              <FontAwesomeIcon icon="star" /> Populaire
            </span>
          )}
        </div>
      </div>
      {meal.picture ? (
        <img src={meal.picture} alt={meal.title} />
      ) : (
        <img src={deliverooLogoSquare} alt="Logo Deliveroo" />
      )}
    </div>
  );
};

export default Meal;
