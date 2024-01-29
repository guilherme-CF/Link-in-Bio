import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";

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
        <footer class="container">
        <div class="social">
            <a href="https://www.facebook.com/profile.php?id=61555308796810" target='_blank'>
            <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/085.digital/" target='_blank'>
            <FaInstagram />
            </a>
            <a href="https://api.whatsapp.com/send?phone=558530236062&text=Ol%C3%A1" target='_blank'>
            <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/company/085-digital/about/" target='_blank'>
            <FaLinkedinIn />
            </a>
        </div> 
        <p> Copyright © 2024. 085.digital | Todos os direitos reservados. <MdVerifiedUser /></p>
        </footer>
      </div>
    </div>
  )
}

export default App;
