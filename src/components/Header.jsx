
const Header = () => {
  return (
    <div className="container">
      <header className="flex flex-wrap items-center justify-between py-3 mb-4 border-b">
        <div className="w-full md:w-1/3 mb-2 md:mb-0 sm:w-auto xs:flex-col xs:justify-center xs:items-center">
          <a href="/" className="inline-flex link-body-emphasis text-decoration-none xs:flex-col xs:justify-center xs:items-center">
            <img src="../../public/logos/logo1.png" width="30%" alt=""/>
          </a>
        </div>

        <ul className="w-full md:w-auto flex justify-center mb-2 md:mb-0 xs:flex-col xs:justify-center xs:items-center desktop:flex-row">
          <li><a href="#" className="nav-link px-2 hover:text-flash-yellow">Inicio</a></li>
          <li><a href="#" className="nav-link px-2 hover:text-flash-yellow">Sobre Nosotros</a></li>
          <li><a href="#" className="nav-link px-2 hover:text-flash-yellow">Sponsors</a></li>
          <li><a href="#" className="nav-link px-2 hover:text-flash-yellow">Trabajos</a></li>
          <li><a href="#" className="nav-link px-2 hover:text-flash-yellow">Contacto</a></li>
        </ul>

        <div className="w-full md:w-1/3 flex justify-end xs:flex-col xs:justify-center xs:items-center desktop:flex-row">
          <button type="button" className="btn btn-outline-primary xs:w-56 xs:justify-center xs:items-center xs:my-3 desktop:w-24">Login</button>
          <button type="button" className="btn btn-outline-primary xs:w-56 xs:justify-center xs:items-center desktop:w-24 desktop:mx-3">Sign-up</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
