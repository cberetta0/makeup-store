import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h2>Bienvenida a Glow Beauty</h2>

        <p>
          Descubrí productos de maquillaje pensados para resaltar tu estilo
          y acompañarte todos los días.
        </p>

        <Link to="/productos" className="home-button">
          Ver productos
        </Link>
      </div>
    </section>
  );
}

export default Home;