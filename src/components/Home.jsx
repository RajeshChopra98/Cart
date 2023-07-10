import React from "react";
import macbook from "../assets/macbook.jpg";
import shoe from "../assets/shoe.webp";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";


const Home = () => {
  const productsList = [
    {
      id: "vvdvcdh",
      name: "Tv",
      price: "5000",
      imgSrc: macbook,
    },
    {
      id: "jvwhgvxwvchw",
      name: "Shoes",
      price: "200",
      imgSrc: shoe,
    },
  ];

  const dispatch = useDispatch();

  const addToCart = (options) =>{
    dispatch({
      type : "addToCart",
      payload : options
    });
    dispatch({ type: "calculatePrice" });
    toast.success("Item added to cart successfully..!")
  };

  return (
    <div className="home">
      {productsList.map(item => (
        <ProductCard
          id={item.id}
          key={item.id}
          name={item.name}
          price={item.price}
          imgSrc={item.imgSrc}
          handler={addToCart}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, imgSrc, handler }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, id, price, imgSrc, quantity: 1 })}> Add to Cart </button>
  </div>
);

export default Home;
