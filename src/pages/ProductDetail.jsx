import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/products/ItemDetails";

function ProductDetail() {
  const { id } = useParams();

  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("/productos.json")
      .then((response) => response.json())
      .then((data) => {
        const productoEncontrado = data.find(
          (producto) => producto.id === Number(id)
        );

        setProducto(productoEncontrado);
      })
      .catch((error) => {
        console.error("Error al cargar el producto:", error);
      })
      .finally(() => {
        setCargando(false);
      });
  }, [id]);

  if (cargando) {
    return <p>Cargando producto...</p>;
  }

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <section className="product-detail-page">
      <ItemDetail producto={producto} />
    </section>
  );
}

export default ProductDetail;