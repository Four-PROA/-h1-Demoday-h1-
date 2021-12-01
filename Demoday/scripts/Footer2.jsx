function Footer2() {
    return (
            <div>
            <footer>
  <div className="boxs">
      <h2>Suporte</h2>
      <div className="d-flex alinha_foot">

      <p><a href="#">SAQ</a></p>
      <br/><br/>
      <p><a href="#">Telefone</a></p>
      <br/><br/>
      <p><a href="#">Chat</a></p>

      </div>
  </div>
  <div className="boxs">
      <h2>Sobre</h2>
      <div className="d-flex  alinha_foot">
     <p>Quem somos?</p>
     <p>Política de privacidade</p>
     </div>
     <div className="d-flex  alinha_foot">
     <p>Nossos valores</p>
     <p>Termos de uso</p>
     </div>
    </div>
  </footer>
  <h4 className="rodape">@2021 Casterizzi</h4>

            </div>
            )
  }
  
  
    ReactDOM.render(
        <Footer2/>,
        document.getElementById('component-footer2')
    )