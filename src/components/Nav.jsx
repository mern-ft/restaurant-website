import "./Nav.css";

function Nav() {
  return (
    <div className="navbox">
      <div class="navbar">
        <a className="active" href="#Home">
          Home
        </a>
        <a className="active" href="#Order">
          Order
        </a>
        <a className="active" href="#About">
          About
        </a>
      </div>
    </div>
  );
}

export default Nav;
