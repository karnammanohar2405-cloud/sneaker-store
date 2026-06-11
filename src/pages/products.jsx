import "./Products.css";

function Products() {
  return (
    <div className="products">

      <h1>Our Collection </h1>

      <div className="product-grid">

        <div className="product-card">
          <h2>Nike Air Max</h2>
          <p>₹7,999</p>
        </div>

        <div className="product-card">
          <h2>Adidas Ultraboost</h2>
          <p>₹8,499</p>
        </div>

        <div className="product-card">
          <h2>Puma RS-X</h2>
          <p>₹6,999</p>
        </div>

      </div>

    </div>
  );
}

export default Products;