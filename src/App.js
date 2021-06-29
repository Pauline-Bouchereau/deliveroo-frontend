import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

import Loading from "./components/Loading";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://deliveroo-duplicate-pb.herokuapp.com/"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  const addToCart = (item) => {
    const newCart = [...cart];
    const existInCart = newCart.find((elem) => elem.id === item.id);
    if (existInCart) {
      existInCart.quantity++;
    } else {
      newCart.push({ ...item, quantity: 1 });
    }
    setCart(newCart);
  };

  const substractFromCart = (item) => {
    const newCart = [...cart];
    const existInCart = newCart.find((elem) => elem.id === item.id);

    if (existInCart.quantity === 1) {
      const index = newCart.indexOf(existInCart);
      newCart.splice(index, 1);
    } else {
      existInCart.quantity--;
    }
    setCart(newCart);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <Header />
      <main>
        <Hero data={data.restaurant} />
        <div>
          <Menu
            data={data.categories}
            addToCart={addToCart}
            substractFromCart={substractFromCart}
          />
          <Cart
            addToCart={addToCart}
            substractFromCart={substractFromCart}
            cart={cart}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
