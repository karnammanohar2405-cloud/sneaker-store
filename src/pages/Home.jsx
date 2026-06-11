import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <h1>
            Step Into Greatness
          </h1>

          <p>
            Discover premium sneakers from the world's
            most iconic brands.
          </p>

          <button
            className="button"
            onClick={() => navigate("/products")}
          >
            Explore Collection
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;