function Footer() {
    return (
            <div>
            <footer>
  <div className="boxs">
      <h2>Nossas redes sociais</h2>

      <div className="icons">
        <div className="redes">
        <p><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></p>
            </div>
        <br/>
        <div className="redes">
        <p><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></p>
            </div>
        <br/>
        <div className="redes">
        <p><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></p>
            </div>
        <br/>
        <div className="redes">
        <p><a href="#"> <i className="fa fa-instagram" aria-hidden="true"></i></a></p>
        </div>
        <div className="redes">
        <p><a href="#"> <i className="fa fa-youtube" aria-hidden="true"></i></a></p>
        </div>
        <div className="redes">
        <p><a href="#"> <i className="fa fa-pinterest" aria-hidden="true"></i></a></p>
        </div>
      </div>

  </div> 
  <div className="boxs">
      <h2>Suporte</h2>
      <p><a href="#">FAQ</a></p>
      <br/><br/>
      <p><a href="#">Telefone</a></p>
      <br/><br/>
      <p><a href="#">Chat</a></p>
      <ul></ul>
  </div>
  <div className="boxs">
      <h2>Sobre</h2>
     <p>Quem somos?</p>
     <br/><br/>
     <p>Nossos valores</p>
     <br/><br/>
     <p>Política da empresa</p>
     
    </div>
  </footer>
  <h4 className="rodape">@2021 Casterizzi</h4>

            </div>
            )
  }
  
  
    ReactDOM.render(
        <Footer/>,
        document.getElementById('component-footer')
    )