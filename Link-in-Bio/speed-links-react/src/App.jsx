import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";

import logo from '/assets/logo.png'
import './App.css';

function App() {

  return (
    <>
      {/* <img src="../src/imgs/nuvem/Nuvem-02.png" className="nuvem nuvem2"/>
      <img src="../src/imgs/nuvem/Nuvem-03.png" className="nuvem nuvem3"/> */}
    
      <div class="conteinerMain">
        <div class="conteinerHead">
          <img src={logo} className="imgPerfil" alt="Img logo" />
          {/* <img src='' className="nuvem nuvem1"/> */}
        </div>

        <div class="conteinerBody">
            <h3>Links SpeedCloud</h3>
          
            <a href="https://www.speedcloud.com.br/" className="button" target='_blank'>Site incrível</a>
          
            <a href="https://api.whatsapp.com/send?phone=558530236062&text=Ol%C3%A1" className="button" target='_blank'>Tire suas dúvidas!</a>
        
            <a href="https://www.linkedin.com/company/101826655/admin/feed/posts/?feedType=following" className="button" target='_blank' >LinkedIn</a>
        
            <a href="https://www.youtube.com/@HostIDC/featured" className="button" target='_blank'>Youtube</a>
        
        </div>
          <h4>Redes Sociais</h4>
        <div class="conteinerIcon">
          <footer class="container">
          <div class="social">
              <a href="https://www.facebook.com/speedcloudbr/?paipv=0&eav=AfZi47P5U5jpueFlG4yusKxL_qV5zYDqIv9U_RUkWK2ITfjyXvMUd-MaDDjAhPsk9mk&_rdr#_=_" target='_blank'>
              <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/speedcloud_/" target='_blank'>
              <FaInstagram />
              </a>
              <a href="https://api.whatsapp.com/send?phone=558530236062&text=Ol%C3%A1" target='_blank'>
              <FaWhatsapp />
              </a>
              <a href="https://www.linkedin.com/company/101826655/admin/feed/posts/?feedType=following" target='_blank'>
              <FaLinkedinIn />
              </a>
          </div> 
          <p> Copyright © 2024. 085.digital | Todos os direitos reservados. <MdVerifiedUser /></p>
          </footer>
        </div>
      </div>
    </>

  )
}

export default App;
