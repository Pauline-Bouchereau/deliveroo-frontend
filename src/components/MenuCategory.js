import Meal from "./Meal";

const MenuCategory = ({ name, meals, addToCart }) => {
  return (
    <div className="menu-category container">
      <h2>{name}</h2>
      <div>
        {meals.map((meal) => {
          return <Meal key={meal.id} addToCart={addToCart} meal={meal} />;
        })}
      </div>
    </div>
  );
};

export default MenuCategory;
