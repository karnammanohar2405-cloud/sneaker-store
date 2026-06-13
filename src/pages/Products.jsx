import "./Products.css";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    navigate("/checkout", {
      state: product,
    });
  };

  return (
    <div className="products">
      <h1>Our Collection</h1>

      <div className="product-grid">
        <div className="product-card">
          <h2>Nike Air Max</h2>
          <p>₹7</p>

          <button
            onClick={() =>
              handleBuyNow({
                name: "Nike Air Max",
                price: 7,
              })
            }
          >
            Buy Now
          </button>
        </div>

        <div className="product-card">
          <h2>Adidas Ultraboost</h2>
          <p>₹8,499</p>

          <button
            onClick={() =>
              handleBuyNow({
                name: "Adidas Ultraboost",
                price: 8499,
              })
            }
          >
            Buy Now
          </button>
        </div>

        <div className="product-card">
          <h2>Puma RS-X</h2>
          <p>₹6,999</p>

          <button
            onClick={() =>
              handleBuyNow({
                name: "Puma RS-X",
                price: 6999,
              })
            }
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;