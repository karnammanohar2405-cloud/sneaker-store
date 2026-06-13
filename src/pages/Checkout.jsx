import { useLocation } from "react-router-dom";

function Checkout() {
  const location = useLocation();

  const product = location.state;

  if (!product) {
    return <h1>No Product Selected</h1>;
  }

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1>Checkout</h1>

      <h2>{product.name}</h2>

      <h3>₹{product.price}</h3>

      <button>
        Pay Now
      </button>
    </div>
  );
}

export default Checkout;