import React from 'react';
import logo from '../../assets/logo-todo2.png';
import { Container, Logotype, Menu } from './styles';
import { FiBell } from 'react-icons/fi';


function Header({ lateCount, clickNtification }) {

    return (
        <Container>
            <Logotype>
                <img src={logo} alt="logotipo do app" />
            </Logotype>
            <Menu>
                <a href="#">INÍCIO</a>
                <span className="divider" />
                <a href="#">NOVA TAREFA</a>
                <span className="divider" />
                <a href="#">SINCRONIZAR CELULAR</a>
                <span className="divider" />
                <a href="#" id="notification" onClick={clickNtification}>
                    <FiBell size={28}/>
                <span>{lateCount}</span>
                </a>
            </Menu>
        </Container>
    );
}

export default Header;