import { Link } from "react-router-dom";

function Cart() {
  return (
    <section className="cart-page">
      <h2>Carrito de compras</h2>

      <p>Tu carrito está vacío.</p>

      <Link to="/productos" className="cart-button">
        Ir a productos
      </Link>
    </section>
  );
}

export default Cart;