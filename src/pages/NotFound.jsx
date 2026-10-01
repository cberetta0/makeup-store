import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found">
      <h2>404</h2>

      <p>La página que estás buscando no existe.</p>

      <Link to="/">
        Volver al inicio
      </Link>
    </section>
  );
}

export default NotFound;