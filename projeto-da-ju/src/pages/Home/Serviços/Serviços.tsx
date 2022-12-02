
import "./servicos.css";
import React from "react";
import{BsFillPeopleFill} from 'react-icons/bs'
import{FaCube} from 'react-icons/fa'
import{MdOutlineColorLens} from 'react-icons/md'
import img from "../../../img/arquitetura.png"
export const Servicos = ()=>{
    return (
        <>
        <div className="faixa2">
            <img src={img} alt="arquiterura" className="arqui"/>
        <div className="mensagem2"><h1>Nossos Serviços</h1></div>
        <div className="icon1">
           <BsFillPeopleFill/>
        </div>
        <div className="icon2">
           <FaCube/>
        </div>
        <div className="icon3">
           <MdOutlineColorLens/>
        </div>
        <div className="s1">Você conta o que precisa, mostra suas fotos e escolhe seu decorador. Fala com ele por chat ou chamada de vídeo.</div>
        <div className="s2">Veja seu projeto em 3D ou em um board de idéias com links dos produtos indicado, planta baixa e a lista de compra. Se quiser, inclua marcenaria planejada, iluminação, forro de gesso e outros.</div>
        <div className="s3">Receba indicações das cores e tenha ajuda da nossa equipe para comprar os objetos de decoração com descontos exclusivos.</div>
        
        </div>
        </>
    );
}