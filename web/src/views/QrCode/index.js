import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Content, CodeArea, ValidationCode, Input } from './styles';

import Qr from 'qrcode.react';

function Qrcode() {

    
    return (
        <Container>
            <Header />
                <Content>
                    <h1>Capture o Qr-Code</h1>
                    <p>Suas atividades serão sincronizadas com o seu celular</p>
                    <CodeArea>
                        <Qr value='getmacaddress' size={350} />
                    </CodeArea>
                    <ValidationCode>
                        <span>Digite o código do seu celular</span>
                        <Input>
                            <input type="text"/>
                        </Input>
                        <button type="">Sincronizar</button>
                    </ValidationCode>
                </Content>
            <Footer />
        </Container>
    );
}

export default Qrcode;