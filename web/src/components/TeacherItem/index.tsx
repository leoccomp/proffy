import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export default function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/52302081?s=460&u=324712d77592b708d00e5c19180767133893cc8c&v=4" alt="Imagem perfil"/>
                <div>
                    <strong>Leonardo Azevedo</strong>
                    <span>Desenvolvimento Software</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias!
                <br/> <br/>
                Apaixonado por novas stacks, conhecimento e ferramentas de desenvolvimnto de software. 
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}