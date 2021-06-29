import Meal from "./Meal";

const MenuCategory = ({ name, meals, addToCart }) => {
  return (
    <div className="menu-category">
      <h2>{name}</h2>
      {meals.map((meal) => {
        return <Meal key={meal.id} addToCart={addToCart} meal={meal} />;
      })}
    </div>
  );
};

export default MenuCategory;
