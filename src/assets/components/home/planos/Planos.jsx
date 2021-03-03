import React, { Component } from 'react'
import './style.css'

export default class Planos extends Component
{
    render() {
        return (
            <div className="planos">
                <div className="titulo">
                    <h2>Conheça nossos planos</h2>
                </div>
                <div className="cards">
                    <div className="card start">
                        <h3>START</h3>
                        <ul>
                            <li>Até 500 animais</li>
                            <li>Até 10 usuários</li>
                            <li>1 Usuário administrador</li>
                            <li>1 Usuário gerente</li>
                        </ul>
                        <div className="preco">
                            <div className="anual">
                                <span>Anual</span>
                                <p><strong>R$ 264,00</strong></p>
                            </div>
                            <div className="mensal">
                                <span>Mensal</span>
                                <p><strong>R$22,00</strong></p>
                            </div>
                            <button>QUERO ESTE</button>
                        </div>
                    </div>
                    <div className="card plus">
                    <h3>PLUS</h3>
                        <ul>
                            <li>Até 1500 animais</li>
                            <li>Até 20 usuários</li>
                            <li>2 Usuário administrador</li>
                            <li>3 Usuário gerente</li>
                        </ul>
                        <div className="preco">
                            <div className="anual">
                                <span>Anual</span>
                                <p><strong>R$ 384,00</strong></p>
                            </div>
                            <div className="mensal">
                                <span>Mensal</span>
                                <p><strong>R$32,00</strong></p>
                            </div>
                            <button>QUERO ESTE</button>
                        </div>
                    </div>
                    <div className="card master">
                        <h3>MASTER</h3>
                        <ul>
                            <li>Animais ilimitados</li>
                            <li>Usuários ilimitados</li>
                            <li>10 Usuário administrador</li>
                            <li>15 Usuário gerente</li>
                        </ul>
                        <div className="preco">
                            <div className="anual">
                                <span>Anual</span>
                                <p><strong>R$ 456,00</strong> </p>
                            </div>
                            <div className="mensal">
                                <span>Mensal</span>
                                <p><strong>R$38,00</strong></p>
                            </div>
                            <button>QUERO ESTE</button>
                        </div>
                    </div>
                </div>
                <span>Entre em contato se precisar de um plano diferente</span>
            </div>
        )
    }
} 