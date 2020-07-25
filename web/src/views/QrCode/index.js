import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Content, CodeArea, ValidationCode, Input } from './styles';
import { Redirect } from 'react-router-dom';
import Qr from 'qrcode.react';

function Qrcode() {

    const [mac, setMac] = useState();
    const [redirect, setRedirect] = useState(false);

    async function saveMac() {
        await localStorage.setItem('@todo/macaddress', mac);
        if (!mac) {
            alert('Scaneie o qr-code com o ToDo-app');
            localStorage.removeItem('@todo/macaddress');
            return;
        }
        setRedirect(true);
        window.location.reload();
    }

    return (
        <Container>
            { redirect && <Redirect to="/" /> }
            <Header />
                <Content>
                    <h1>Capture o Qr-Code com o ToDo-app</h1>
                    <p>Suas atividades serão sincronizadas com o seu celular</p>
                    <CodeArea>
                        <Qr value='getmacaddress' size={350} />
                    </CodeArea>
                    <ValidationCode>
                        <span>Digite o código do seu celular</span>
                        <Input>
                            <input type="text"
                                onChange={event => setMac(event.target.value)}
                                value={mac}    
                            />
                        </Input>
                        <button type="button" 
                            onClick={saveMac}>
                            Sincronizar
                        </button>
                    </ValidationCode>
                </Content>
            <Footer />
        </Container>
    );
}

export default Qrcode;