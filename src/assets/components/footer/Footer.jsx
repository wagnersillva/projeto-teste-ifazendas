import React, { Component } from 'react'
import './style.css'
import imgLogo from '../../img/logo-ifazendas.png'
import imgInstagram from '../../img/instagram-logo-png.png'
import imglinkedin from '../../img/linkedin-logo-png.png'
import imgtwitter from '../../img/twiter-logo-png.png'
import imgyoutube from '../../img/youtube-logo-png.png'

export default class Footer extends Component 
{
    render(){
        return(
            <footer>
                <img src={imgLogo} alt="" className=""/>
                <div className="redesSociais">
                    <a target="_blank" className="imgyoutube" rel="noreferrer" href="http://youtube.com"><img src={imgyoutube} alt=""/></a>
                    <a target="_blank" className="imgtwitter" rel="noreferrer" href="https://twitter.com/"><img src={imgtwitter} alt=""/></a>
                    <a target="_blank" className="imglinkedin" rel="noreferrer" href="http://"><img src={imglinkedin} alt=""/></a>
                    <a target="_blank" className="imgInstagram" rel="noreferrer" href="https://www.instagram.com/"><img src={imgInstagram} alt=""/></a>
                </div>
                <p>iFazendas - 2021 - todos os direitos reservados</p>
            </footer>
        )
    }
}