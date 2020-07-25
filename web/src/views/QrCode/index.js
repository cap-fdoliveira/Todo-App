import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Content, CodeArea } from './styles';

function Qrcode() {
    return (
        <Container>
            <Header />
                <Content>
                    <h1>Capture o qrCode</h1>
                    <CodeArea>Aqui vai o qr-code</CodeArea>
                    <p>Suas atividades serão sincronizadas com o seu celuar</p>
                </Content>
            <Footer />
        </Container>
    );
}

export default Qrcode;