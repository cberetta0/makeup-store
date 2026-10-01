import CartWidget from "../cart/CartWidget";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div>
          <h1>Glow Beauty</h1>
          <p>Makeup that makes you glow</p>
        </div>

        <CartWidget cantidad={2} />
      </div>
    </header>
  );
}

export default Header;