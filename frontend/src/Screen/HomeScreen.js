import "./HomeScreen.css";
import Carousel from "react-elastic-carousel";
import data from "../data";
import { useState } from "react";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 700, itemsToShow: 3 },
  { width: 1250, itemsToShow: 5 },
];

function HomeScreen() {
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState(0);
  return (
    <div className="Home">
      <div style={{ display: "flex" }}>
        <img className="cart_image" src="/images/image4.jpg" alt="cart Image" />
        <div>{items}</div>
        <div style={{ margin: "auto", fontSize: "25px" }}>{price} USD</div>
      </div>
      <div style={{ display: "flex", marginTop: "120px", height: "500px" }}>
        <div>
          <div className="text_1">EAT ORGANIC & GLUTEN FREE HEALTHY FOOD</div>
          <div className="text_2">
            We suuply high quality organic and gluten free product
          </div>
          <button className="button1">Try our sampler pack</button>
          <button className="button2"> ▶ </button>
          <span
            style={{
              fontSize: "20px",
              marginLeft: "15px",
              fontFamily: "Josefin Sans",
            }}
          >
            {" "}
            About Happy Campers
          </span>
          <div>
            <img className="image3" src="/images/image3.jpg" alt="image3" />
          </div>
        </div>
        <img src="/images/image1.jpg" className="image1" alt="image1"></img>
      </div>
      <div style={{ height: "100px" }}></div>
      <img className="image2" src="/images/image2.jpg" alt="image2" />
      <div style={{ height: "100px" }}></div>
      <div className="product_showcase">Featured Products</div>
      <Carousel breakPoints={breakPoints}>
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "270px",
                height: "200px",
                borderRadius: "25px",
                marginTop: "20px",
              }}
            />
            <p style={{ marginTop: "15px" }}>{product.name}</p>
            <p style={{ color: "#ABC480" }}>${product.price}</p>
            <p>
              {product.weight}
              <span>{product.description}</span>
            </p>
            <button
              className="product_button"
              onClick={() => {
                setPrice(price + product.price);
                setItems(items + 1);
              }}
            >
              add to cart
            </button>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default HomeScreen;
