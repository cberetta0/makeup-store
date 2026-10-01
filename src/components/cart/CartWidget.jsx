import { Link } from "react-router-dom";

function CartWidget({ cantidad = 0 }) {
  return (
    <Link to="/carrito" className="cart-widget">
      <span className="cart-icon">🛒</span>

      {cantidad > 0 && (
        <span className="cart-count">
          {cantidad}
        </span>
      )}
    </Link>
  );
}

export default CartWidget;