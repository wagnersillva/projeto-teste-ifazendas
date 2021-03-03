import React, { Component } from 'react'
import './style.css'
// imagens e ícones da primeira parte da apresentação
import iconReducaoCustos from '../../../img/icon-reducao-custos.png'
import iconReducao from '../../../img/icon-reducao.png'
import iconRendimento from '../../../img/icon-rendimento.png'
import iconGerenciamento from '../../../img/icon-gerenciamento.png'
import iconPrevisao from '../../../img/icon-alvo-previsao.png'
// imagens e ícones da segunda parte da apresentação
import iconCerto from '../../../img/icon-certo.png'
import mockupWebMobile from '../../../img/mockup-pc-celular.png'

export default class Apresentacao extends Component 
{
    render(){
        return (
            <div className="Apresentacao">
                <div className="primeiraParte">
                    <div className="titulo">
                        <h2 >
                            iFazendas é feito por quem vive isso.
                        </h2>
                        <p >
                            Criamos um sistema para nossa fazenda, ficou tão bom que queremos compartilhar com você.
                        </p>
                    </div>
                    <div className="resultadosAlcancados">
                        <h3 className="titulo">Alguns resultados alcançados:</h3>
                        <ul className="listaResultados">
                            <li className="resultadoItem"> 
                                <img src={iconReducaoCustos} alt="Ícone Redução custos"/>
                                <span>Reduzir nossos custos</span>
                            </li>
                            <li className="resultadoItem">
                                <img src={iconRendimento} alt="icon rendimentos"/>
                                <span>Aumentar nossos rendimentos</span>
                            </li>
                            <li className="resultadoItem">
                                <img src={iconReducao} alt="Ícone redução mortalidade"/>
                                <span>Reduzir a mortalidade do rebanho</span>
                            </li>
                            <li className="resultadoItem">
                                <img src={iconGerenciamento} alt=""/>
                                <span>Gerenciar manejos inteligentes</span>
                            </li>
                            <li className="resultadoItem">
                                <img src={iconPrevisao} alt=""/>
                                <span>Previsões mais precisas para monta e parição</span>
                            </li>
                        </ul>
                        <button className="btn-saibaMais">SAIBA MAIS</button>
                    </div>
                </div>
                <div className="segundaParte">
                    <div className="titulo">
                        <h2>Contamos com um sistema integrado WEB/ Mobile</h2>
                    </div>
                    <div className="detalhes">
                        <div className="imagem">
                            <img src={mockupWebMobile} alt="mockup pc e smartphone"/>
                        </div>
                        <div className="lista">
                            <ul>
                                <li>
                                    <img src={iconCerto} alt="imagem icone certo"/>
                                   <span>Crie atividades para seus colaboradores, e eles recebem no celular.</span> 
                                </li>
                                <li>
                                    <img src={iconCerto} alt="imagem icone certo"/>
                                    <span>Veja as atividades no manejo do seu computador.</span>
                                </li>
                                <li>
                                    <img src={iconCerto} alt="imagem icone certo"/>
                                    <span>Gerencie e acompanhe tudo que acontece no pasto sem sair do seu escritório.</span>
                                </li>
                                <li>
                                    <img src={iconCerto} alt="imagem icone certo"/>
                                    <span>Gere relatórios com todas as informações recebidas.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}