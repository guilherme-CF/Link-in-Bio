import './App.css'

function App() {

  return (
    <div class="conteinerMain">
    <div class="conteinerHead">
      <div class="imgPerfil">
        <img src="../src/imgs/MK Cloud - azul (1).png" alt="Img logo" />
      </div>
      <div class="descricao"></div>
    </div>

    <div class="conteinerBody">
      <div class="primeiroLink">
        <a href="https://mkcloud.com.br/"><p>Site incrível</p></a>
      </div>
      <div class="segundoLink">
        <a href="https://wa.me/551154611485"><p>Tire suas dúvidas!</p></a>
      </div>
      <div class="terceiroLink">
        <a href="https://www.facebook.com/mkcloudbrasil/?locale=pt_BR"
          ><p>Facebook</p></a
        >
      </div>
      <div class="quartoLink">
        <a href="https://www.youtube.com/@HostIDC/featured"><p>Youtube</p></a>
      </div>

      <div>
        <h4>Redes Sociais</h4>
      </div>
    </div>
    <div class="conteinerIcon">
      <div>
        <a href="https://www.facebook.com/mkcloudbrasil/?locale=pt_BR"
          ><img src="../src/imgs/icons-face-50.png" alt="icon-1"
        /></a>
      </div>
      <div>
        <a href="https://wa.me/551154611485"
          ><img src="../src/imgs/icons-wpp-50.png" alt="icon-2"
        /></a>
      </div>
      <div>
        <a href="#"><img src="../src/imgs/icons-insta-50.png" alt="icon-3" /></a>
      </div>
    </div>
  </div>
  )
}

export default App
