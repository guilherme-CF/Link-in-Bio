import React from 'react';

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdVerifiedUser } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

import logo from '/assets/logo.png'
import nail from '/assets/nail.png';
import lash from '/assets/lash.png';
import hand from '/assets/hand.png';
import eyebrow from '/assets/eyebrow.png';

import './App.css';

function App() {

  return (
    <>
      <div class="conteinerMain">
        
        <img src={logo} className="imgPerfil" alt="Img logo" />
       
        <ul>
          <li>
            <a href="#" className="button" target='_blank'>
            <AiOutlineSchedule className="iconbtn site" /> <h5>Agendamento</h5> 
            </a>
          </li>
        
          <li>
            <a href="https://wa.me/5585996556596" className="button" target='_blank'>
              <img src={nail} alt="nail" className='iconbtn image'/> <h5>Nails Desing</h5>
            </a>
          </li>

          <li>
            <a href="https://wa.me/5585986772193" className="button" target='_blank'>
              <img src={lash} alt='lash' className="iconbtn image"/> <h5>Lash Desing</h5>
            </a>
          </li>

          <li>
            <a href="https://wa.me/5585986207100" className="button" target='_blank'>
              <img src={eyebrow} alt='eyebrow' className="iconbtn image"/> <h5>Micro Labial</h5>
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
          </div> 
          <p> Copyright © 2024. Estética Christina Castro | Todos os direitos reservados. <MdVerifiedUser /></p>
        </footer>
    
      </div>
    </>
  )
}

export default App;
