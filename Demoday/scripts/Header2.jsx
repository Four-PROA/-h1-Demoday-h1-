function Header2() {
    return (
            <div>
            <header>
      <nav className="navbar navbar-expand-lg navbar-light dimension_text_nav">
        <div className="container-fluid ">
          <div className="collapse navbar-collapse row " id="navbarNav">
            <ul className="navbar-nav justify-content-around ">
            <li className="nav-item">
            <a className="navbar-brand" href="#"><img src="../_img/Castorzin.png" alt=""/></a>
              </li>
              <li className="nav-item">
                <a className="nav-link m-2" href="#">Encontrar Prestador</a>
              </li>
              <li className="nav-item">
                <a className="nav-link m-2" href="#">Quero ser Prestador</a>
              </li>
              <li className="nav-item">
                <a className="nav-link m-2" href="#">Como funciona?</a>
              </li>
            </ul>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse row " id="navbarNav">
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link m-2" href="#"><i class="bi bi-calendar-minus"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link m-2" href="#"><i class="bi bi-bell"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link m-2" href="#"><i class="bi bi-suit-heart"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link m-2" href="#"><i class="bi bi-person-circle"></i> Carolina <i class="bi bi-caret-down-fill"></i></a>
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
        <Header2 />,
        document.getElementById('component-header2')
    )