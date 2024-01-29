import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";

import './App.css';

function App() {

  return (
    <div class="conteinerMain">
      <div class="conteinerHead">
        <div class="imgPerfil">
          <img src="../src/imgs/logoSC (1).png" alt="Img logo" />
        </div>
        <div class="descricao">
          <h3></h3>
        </div>
      </div>

      <div class="conteinerBody">
        
          <a href="https://www.speedcloud.com.br/servidor-dedicado" className="button" target='_blank'>Site incrível</a>
        
          <a href="https://api.whatsapp.com/send?phone=558530236062&text=Ol%C3%A1" className="button" target='_blank'>Tire suas dúvidas!</a>
       
          <a href="https://www.linkedin.com/company/101826655/admin/feed/posts/?feedType=following" className="button" target='_blank' >Linkedin</a>
       
          <a href="https://www.youtube.com/@HostIDC/featured" className="button" target='_blank'>Youtube</a>
      
      </div>
        <h4>Redes Sociais</h4>
      <div class="conteinerIcon">
        <div>
          <a href="https://www.facebook.com/speedcloudbr/?paipv=0&eav=AfZi47P5U5jpueFlG4yusKxL_qV5zYDqIv9U_RUkWK2ITfjyXvMUd-MaDDjAhPsk9mk&_rdr#_=_" target='_blank' className="icon"><FaFacebookSquare  /></a>
        </div>
        <div>
          <a href="https://api.whatsapp.com/send?phone=558530236062&text=Ol%C3%A1" target='_blank' className="icon"><IoLogoWhatsapp /></a>
        </div>
        <div>
          <a href="https://www.instagram.com/speedcloud_/" target='_blank' className="icon"><AiFillInstagram /></a>
        </div>
        <div>
          <a href="https://www.youtube.com/@HostIDC/featured" target='_blank' className="icon"><FaYoutube /></a>
        </div>
      </div>
    </div>
  )
}

export default App;
