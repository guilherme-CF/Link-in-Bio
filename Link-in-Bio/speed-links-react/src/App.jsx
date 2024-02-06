import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosMore } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

import logo from '/assets/logo.png'
import './App.css';
import './animation.css';

function App() {

  return (
    <>

      <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>


      <div class="conteinerMain">
        <div class="conteinerHead">
          <img src={logo} className="imgPerfil" alt="Img logo" />
        </div>

        <div class="conteinerBody">
            <h3>Para cada demanda, uma solução ideal na nuvem</h3>
          
            <a href="https://www.speedcloud.com.br/" className="button" target='_blank'>
            <TbWorld className="iconbtn site" /> <span>Nosso Site</span> <IoIosMore className="iconbtn more"/>
            </a>
          
            <a href="https://api.whatsapp.com/send?phone=558530236062&text=Ol%C3%A1" className="button" target='_blank'>
              <IoLogoWhatsapp className="iconbtn zap"/> <span>Chama no Zap</span> <IoIosMore className="iconbtn more"/>
            </a>
        
        </div>
        <div class="conteinerIcon">
          <h4>Redes Sociais</h4>
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
          <p> Copyright © 2024. SpeedCloud | Todos os direitos reservados. <MdVerifiedUser /></p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App;
