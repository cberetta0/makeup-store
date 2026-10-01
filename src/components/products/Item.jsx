import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <article className="item-card">
      <img
        src={producto.imagen}
        alt={producto.nombre}
      />

      <div className="item-info">
        <span className="item-category">
          {producto.categoria}
        </span>

        <h3>{producto.nombre}</h3>

        <p className="item-brand">
          {producto.marca}
        </p>

        <p className="item-price">
          ${producto.precio}
        </p>

        <Link
          to={`/producto/${producto.id}`}
          className="item-button"
        >
          Ver producto
        </Link>
      </div>
    </article>
  );
}

export default Item;