import MenuCagtegory from "./MenuCategory";

const Menu = ({ data, addToCart }) => {
  return (
    <div className="container">
      {data.map((category, index) => {
        return (
          category.meals.length > 0 && (
            <MenuCagtegory
              key={index}
              name={category.name}
              meals={category.meals}
              addToCart={addToCart}
            />
          )
        );
      })}
    </div>
  );
};

export default Menu;
