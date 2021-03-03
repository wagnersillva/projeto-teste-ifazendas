import React, { Component } from 'react'
import './style.css'
import './main'
import iconClosed from "../../../img/icon-closed.png";
import iconLocalizacao from "../../../img/icon-localizacao.png";
import iconCelular from "../../../img/icon-celular.png";
import iconTelefone from "../../../img/icon-telefone.png";

import Swal from 'sweetalert2'

import firebase from '../../../../config/firebase'

const db = firebase.firestore()

export default class Suporte extends Component {
    constructor(){
        super()
        this.state = {
            nome:'',
            email:'',
            mensagem:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.validarEmail = this.validarEmail.bind(this)
    }

    handleChange(event) {
        const value = event.target.value
        this.setState({
            ...this.state,
            [event.target.name]: value
        });
      }
    
    handleSubmit(event) {
       if(this.state.name !== '' && this.state.name !== ' ' &&
       this.state.email !== '' && this.state.email !== ' ' &&
       this.state.mensagem !== '' && this.state.mensagem !== ' '
       ) {
        this.validarEmail(this.state.email)
        .then(e => {
            if(e){
                db.collection('formulario').add({
                    nome: this.state.nome,
                    email: this.state.email,
                    mensagem: this.state.mensagem
                })
                    .then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Sua mensagem foi enviada com sucesso!',
                            showConfirmButton: false,
                            timer: 2500
                        })
                    })
                    .then(() => {
                        document.getElementById('DivModal').style.display='none'
                        this.setState({name: ''})
                        this.setState({email: ''})
                        this.setState({mensagem: ''})
                    })
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Email inválido',
                    showConfirmButton: true,
                })
            }
        })
       } else {
           Swal.fire({
            icon: 'warning',
            title: 'Verifique se todos os campos estão preenchidos.',
            showConfirmButton: true,
        })
       }
        event.preventDefault();
    }



    validarEmail(email){
        return new Promise((resolve) => {
            if(email.indexOf('@') !==-1 && email.indexOf('.com') !==-1 ) {
                resolve(true)
            } else {
                resolve(false)
            }
        })
    }

    render() {
        return (
            <div className="suporte">
                <div className="detalhes">
                    <h2>Conte com nosso suporte sempre que precisar</h2>
                    <p>Suporte especializado para lhe atender com a maior agilidade e qualidade.</p>
                    <button id="btnSuporte">FALE CONOSCO</button>
                </div>
                <div className="div-modal" id="DivModal">
                    <img src={iconClosed} id="imgClosedModal" alt="icon fechar modal"/>
                    <div className="conteudoModal">
                        <div className="formulario">
                            <h2>FALE CONOSCO</h2>
                            <div className="informacoes">
                                <ul>
                                    <li>
                                        <img src={iconLocalizacao} alt="iconLocalizacao" className="iconLocalizacao"/>
                                        <p>R. Dr. Gilberto Studart, 55 - Cocó</p>
                                    </li>
                                    <li>
                                        <img src={iconTelefone} alt="iconTelefone" className="iconTelefone"/>
                                        <p>+55 85 3047.0800</p>
                                    </li>
                                    <li>
                                        <img src={iconCelular} alt="iconCelular" className="iconCelular"/>
                                        <p>+55 85 3047.0800</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="form">
                                <form onSubmit={this.handleSubmit}>
                                    <input type="text" name="nome" value={this.state.nome} onChange={this.handleChange} className="text-email" id="FormNome" placeholder="Nome"/>
                                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} id="FormEmail" placeholder="Email"/>
                                    <textarea name="mensagem" value={this.state.mensagem} onChange={this.handleChange} id="FormMensagem" cols="30" rows="10" placeholder="Escreva sua mensagem"></textarea>
                                    <button>Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}