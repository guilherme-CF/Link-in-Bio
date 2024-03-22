import React from 'react';

import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn,
  FaWhatsapp 
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";

import { MdAccessibilityNew } from "react-icons/md";
import { AiOutlineFileProtect } from "react-icons/ai";
import { AiOutlineContainer } from "react-icons/ai";

import { IoNewspaperSharp } from "react-icons/io5";


import logo from '/assets/logo.png'


import './App.css';

function App() {

  return (
    <>
      <div class="conteinerMain">
        
        <img src={logo} className="imgPerfil" alt="Img logo" />
       
        <ul>
          <li>
            <a href="https://www.085.digital/" className="button" target='_blank'>
            <MdAccessibilityNew className="iconbtn image" /> <h5>Conheça a gente!</h5> 
            </a>
          </li>
        
          <li>
            <a href="https://wa.me/5585996849669" className="button" target='_blank'>
              <AiOutlineFileProtect className='iconbtn image nail'/> <h5 style={{ fontSize: 14 }}>Solicite um orçamento</h5>
            </a>
          </li>

          <li>
            <a href="https://wa.me/5585986772193" className="button" target='_blank'>
              <AiOutlineContainer className="iconbtn image lash"/> <h5>Nosso Blog</h5>
            </a>
          </li>
        </ul>
        
        <footer class="container">
          <h4>Redes Sociais</h4>
          <div class="social">
              <a href="https://wa.me/5585996849669" target='_blank'>
              <FaWhatsapp  />
              </a>

              <a href="https://www.instagram.com/085.digital/" target='_blank'>
              <FaInstagram />
              </a>

              <a href="https://www.facebook.com/a085.digital" target='_blank'>
              <FaFacebookF />
              </a>

              <a href="https://www.linkedin.com/company/101499781/feed/posts/" target='_blank'>
              <FaLinkedinIn />
              </a>

              <a href="https://twitter.com/085Digital" target='_blank'>
              <FaXTwitter />
              </a>
          </div> 
          <p> Copyright © 2024. 085 Digital | Todos os direitos reservados. <MdVerifiedUser /></p>
        </footer>
    
      </div>
    </>
  )
}

export default App;
