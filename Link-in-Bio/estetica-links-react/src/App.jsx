import React, { useEffect, useState } from 'react';

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
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

  const [fraseAleatoria, setFraseAleatoria] = useState('');
  
  const frases = [
    'Em cada servidor, a excelência brasileira em hospedagem',
    'Desbloqueando possibilidades com serviços de hospedagem',
    'Sua solução em Servidores Dedicados',
    'Colocation com a melhor infra localizada no Brasil',
    'Para cada demanda, uma solução ideal na nuvem'
  ];

  useEffect(() => {
    // Função para selecionar uma frase aleatória do array
    function selecionarFraseAleatoria() {
      const indiceAleatorio = Math.floor(Math.random() * frases.length);
      setFraseAleatoria(frases[indiceAleatorio]);
    }

    // Chama a função ao carregar a página
    selecionarFraseAleatoria();
  }, []); // O array vazio como segundo argumento faz com que o useEffect seja executado apenas uma vez, após a montagem do componente
  

  return (
    <>

      <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>


      <div class="conteinerMain">
        <div class="conteinerHead">
          <img src='assets/logo.png' className="imgPerfil" alt="Img logo" />
        </div>

        <div class="conteinerBody">
          
            <ul>
              <li>
                <span></span><span></span><span></span><span></span>
                <a href="#" className="button" target='_blank'>
                <TbWorld className="iconbtn site" /> <h5>Agendamento</h5> 
                </a>
              </li>
            
              <li>
                  <span></span><span></span><span></span><span></span>
                <a href="#" className="button" target='_blank'>
                  <IoLogoWhatsapp className="iconbtn zap"/> <h5>Whatsapp</h5>
                </a>
              </li>

              <li>
                  <span></span><span></span><span></span><span></span>
                <a href="#" className="button" target='_blank'>
                  <FaFacebook className="iconbtn zap"/> <h5>Facebook</h5>
                </a>
              </li>

              <li>
                  <span></span><span></span><span></span><span></span>
                <a href="#" className="button" target='_blank'>
                  <IoLogoWhatsapp className="iconbtn zap"/> <h5>Whatsapp</h5>
                </a>
              </li>

              <li>
                  <span></span><span></span><span></span><span></span>
                <a href="#" className="button" target='_blank'>
                  <IoLogoWhatsapp className="iconbtn zap"/> <h5>Whatsapp</h5>
                </a>
              </li>
            </ul>
        
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
          <p> Copyright © 2024. Estética Christina Castro | Todos os direitos reservados. <MdVerifiedUser /></p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App;
