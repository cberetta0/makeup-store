function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <section>
          <h3>Glow Beauty</h3>
          <p>
            Productos de maquillaje seleccionados para resaltar tu belleza
            todos los días.
          </p>
        </section>

        <section>
          <h4>Empresa</h4>
          <p>Sobre nosotros</p>
          <p>Política de privacidad</p>
          <p>Términos y condiciones</p>
        </section>

        <section>
          <h4>Contacto</h4>
          <p>contacto@glowbeauty.com</p>
          <p>Buenos Aires, Argentina</p>
        </section>

        <section>
          <h4>Newsletter</h4>

          <form className="newsletter">
            <input
              type="email"
              placeholder="Ingresá tu email"
            />

            <button type="submit">
              Suscribirme
            </button>
          </form>
        </section>
      </div>

      <section className="team">
        <h3>Nuestro equipo</h3>

        <div className="team-cards">
          <article className="team-card">
            <img
              src="/images/team/persona1.jpg"
              alt="Sofía Martínez"
            />

            <h4>Sofía Martínez</h4>
            <p>Founder</p>
          </article>

          <article className="team-card">
            <img
              src="/images/team/persona2.jpg"
              alt="Martina López"
            />

            <h4>Martina López</h4>
            <p>Makeup Artist</p>
          </article>

          <article className="team-card">
            <img
              src="/images/team/persona3.jpg"
              alt="Julieta García"
            />

            <h4>Julieta García</h4>
            <p>Marketing Manager</p>
          </article>
        </div>
      </section>

      <div className="footer-bottom">
        <p>
          © 2026 Glow Beauty. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;