function Header() {
  return (
          <div>
          <header>
    <nav className="navbar navbar-expand-lg navbar-light dimension_text_nav">
      <div className="container-fluid ">
        <a className="navbar-brand" href="#"><img src="../_img/logoCastor.png" alt=""/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse row " id="navbarNav">
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link m-2" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link m-2" href="#">Como funciona</a>
            </li>
            <li className="nav-item">
              <a className="nav-link m-2" href="#">Serviços</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
          </div>
          )
}


  ReactDOM.render(
      <Header />,
      document.getElementById('component-header')
  )