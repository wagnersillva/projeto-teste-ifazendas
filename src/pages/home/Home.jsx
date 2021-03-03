import React, { Component } from 'react'
import Header from '../../assets/components/header/Header'
import Footer from '../../assets/components/footer/Footer'
import SessaoBanner from '../../assets/components/home/inicio/SessaoBanner'
import Apresentacao from '../../assets/components/home/apresentacao/Apresentacao'
import Planos from '../../assets/components/home/planos/Planos'
import Suporte from '../../assets/components/home/suporte/Suporte'

export default class Home extends Component 
{
    render() {
        return(
            <div>
                <Header/>
                <SessaoBanner/>
                <Apresentacao/>
                <Planos/>
                <Suporte/>
                <Footer/>
            </div>
        )
    }
}