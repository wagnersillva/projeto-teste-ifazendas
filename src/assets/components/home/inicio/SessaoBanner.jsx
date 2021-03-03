import React, { Component } from 'react'
import './style.css'
import imgAgricultor from '../../../img/homem-agricultor-tec.jpg'
export default class SessaoBanner extends Component {
    render() {
        return (
            <div className="SessaoBanner">
                <img src={imgAgricultor} alt=""/>
                <div className="camadaCinza"></div>
                <div className="Conteudo">
                    <h1 className="titulo">
                        Gerencie sua fazenda Facilmente de forma eficaz
                    </h1>
                    <button className="btn-contrate">
                        <a href="/">CONTRATE</a>
                    </button>   
                </div>
            </div>
        )
    }
}