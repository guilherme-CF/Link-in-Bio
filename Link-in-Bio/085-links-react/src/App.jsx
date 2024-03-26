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
import { IoIosPaper } from "react-icons/io";
import { MdAssignmentAdd } from "react-icons/md";


import logo from '/assets/logo.png'


import './App.css';

function App() {

  return (
    <>

        <img src={logo} className="imgPerfil" alt="Img logo" />
    
        <ul>
          <li>
            <a href="https://www.085.digital/" className="button" target='_blank'>
            <MdAccessibilityNew className="iconbtn image" /> <h5>Conheça a gente!</h5> 
            </a>
          </li>
        
          <li>
            <a href="https://wa.me/5585996849669" className="button" target='_blank'>
              <MdAssignmentAdd className='iconbtn image nail'/> <h5 >Agende sua reunião</h5>
            </a>
          </li>

          <li>
            <a href="https://wa.me/5585986772193" className="button" target='_blank'>
              <IoIosPaper className="iconbtn image lash"/> <h5>Nosso <br /> Blog</h5>
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
    
      
    </>
  )
}

export default App;
