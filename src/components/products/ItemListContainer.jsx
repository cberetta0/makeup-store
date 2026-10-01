import { useEffect, useState } from "react";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/productos.json")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);

  return (
    <section className="item-list-container">
      <h2>Nuestros productos</h2>

      <ItemList productos={productos} />
    </section>
  );
}

export default ItemListContainer;