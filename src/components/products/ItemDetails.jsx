function ItemDetail({ producto }) {
  return (
    <section className="item-detail">
      <div className="item-detail-image">
        <img
          src={producto.imagen}
          alt={producto.nombre}
        />
      </div>

      <div className="item-detail-info">
        <span>{producto.categoria}</span>

        <h2>{producto.nombre}</h2>

        <p>{producto.marca}</p>

        <p>{producto.descripcion}</p>

        <p>
          Stock disponible: {producto.stock}
        </p>

        <h3>
          ${producto.precio}
        </h3>

        <button>
          Agregar al carrito
        </button>
      </div>
    </section>
  );
}

export default ItemDetail;