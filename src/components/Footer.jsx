
const Footer = () => {
  return (
    <footer className="df rw wp t-jcc d-jcs">
      <section className="df rw aic jcc" id="brand-footer">
        <a href="/">
          <picture>
            <source srcSet="/images/logo-blanco.png" alt="Flash Logo" media="(min-width: 1200px)" />
            <img src="/images/icon.png" alt="Flash Icon" />
          </picture>
        </a>
      </section>
      <nav id="nav-footer" className="df cl aic jcc releway bold">
        {user == null ? (
          <>
            <a className="d-df d-aic d-jcc" href="/usuarios/ingresar">
              Ingresar
            </a>
            <a className="d-df d-aic d-jcc" href="/usuarios/unirse">
              Unirse
            </a>
          </>
        ) : (
          <>
            <a className="d-df d-aic d-jcc" href="/usuarios/perfil">
              Perfil
            </a>
            <a className="d-df d-aic d-jcc" href="/usuarios/salir">
              Salir
            </a>
            {user.type.id === 1 && (
              <>
                <a className="d-df d-aic d-jcc" href="/trabajos/publicar">
                  Publicar
                </a>
                <a className="d-df d-aic d-jcc" href="/trabajos/notificaciones">
                  Notificaciones
                </a>
              </>
            )}
            {user.type.id === 2 && (
              <>
                <a className="d-df d-aic d-jcc" href="/usuarios/favoritos">
                  Favoritos
                </a>
                <a className="d-df d-aic d-jcc" href="/trabajos/notificaciones">
                  Notificaciones
                </a>
              </>
            )}
          </>
        )}
        <a className="d-df d-aic d-jcc" href="/trabajos">
          Trabajos
        </a>
      </nav>
      <section id="newsletter" className="df rw wp jcc aic">
        <h2 className="fx-auto df jcc releway bold">Enterate de las últimas novedades</h2>
        <form id="join-form" action="/blog/unirse" method="post">
          <fieldset className="df jcsb aic">
            <input className="releway light" type="text" name="email" id="email" placeholder="Ingresá tu correo" />
            <button type="submit" className="releway bold">
              Sumarse
            </button>
          </fieldset>
        </form>
      </section>
      <nav id="nav-footer-two" className="df cl aic jcc releway light">
        <a className="d-df d-aic d-jcc" href="/contacto">
          Contacto
        </a>
        <a className="d-df d-aic d-jcc" href="/politica">
          Política de Privacidad
        </a>
        <a className="d-df d-aic d-jcc" href="/terminos">
          Términos y Condiciones
        </a>
        <a className="d-df d-aic d-jcc" href="/preguntas">
          Preguntas Frecuentes
        </a>
      </nav>
      <nav id="networks" className="fx-auto df wp jcc aic">
        <a href="http://" target="_blank">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="http://" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="http://" target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>
      </nav>
      <section className="releway bold" id="copy">
        <p>&copy; Flash Bird - 2021</p>
      </section>
    </footer>
  );
};

export default Footer;
