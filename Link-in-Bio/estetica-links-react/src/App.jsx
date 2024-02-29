import React, { useEffect, useState } from 'react';

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { IoLogoInstagram } from 'react-icons/io';

import logo from '/assets/logo.png'
import './App.css';
import './animation.css';

function App() {

  return (
    <>
      <div class="conteinerMain">
        
        <img src={logo} className="imgPerfil" alt="Img logo" />
       
        <ul>
          <li>
            <a href="#" className="button" target='_blank'>
            <TbWorld className="iconbtn site" /> <h5>Agendamento</h5> 
            </a>
          </li>
        
          <li>
            <a href="#" className="button" target='_blank'>
              <IoLogoWhatsapp className="iconbtn zap"/> <h5>Whatsapp</h5>
            </a>
          </li>

          <li>
            <a href="#" className="button" target='_blank'>
              <FaFacebook className="iconbtn zap"/> <h5>Facebook</h5>
            </a>
          </li>

          <li>
            <a href="#" className="button" target='_blank'>
              <IoLogoInstagram className="iconbtn zap"/> <h5>Instagram</h5>
            </a>
          </li>

          <li>
            <a href="#" className="button" target='_blank'>
              <IoLogoWhatsapp className="iconbtn zap"/> <h5>Whatsapp</h5>
            </a>
          </li>
        </ul>
        
        <footer class="container">
          <h4>Redes Sociais</h4>
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
          <p> Copyright © 2024. Estética Christina Castro | Todos os direitos reservados. <MdVerifiedUser /></p>
        </footer>
    
      </div>
    </>
  )
}

export default App;
