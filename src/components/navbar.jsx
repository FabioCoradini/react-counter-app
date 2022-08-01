const NavBar = (props) => {
  return (
    <nav className="navbar-light bg-light">
      <a className="navbar-brand" href="#nada">
        NavBar
        <span className="badge badge-fill badge-secundary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
