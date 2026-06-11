import "./Navbar.css";

function Navbar() {
  return (
    <nav>

      <h2 className="logo">
        SneakerHub
      </h2>



      <div className="nav-icons">

        <button className="nav-btn">
          Cart 🛒
        </button>

        <button className="profile-btn">
          👤
        </button>
     

      </div>

    </nav>
  );
}

export default Navbar;