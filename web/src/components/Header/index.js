import React from 'react';
import logo from '../../assets/logo-todo2.png';
import { Container, Logotype, Menu } from './styles';
import { FiBell } from 'react-icons/fi';


function Header() {
    return (
        <Container>
            <Logotype>
                <img src={logo} alt="logotipo do app" />
            </Logotype>
            <Menu>
                <a href="#">Início</a>
                <span className="divider" />
                <a href="#">Nova Tarefa</a>
                <span className="divider" />
                <a href="#">Sincronizar celular</a>
                <span className="divider" />
                <a href="#" id="notification">
                    <FiBell size={28}/>
                    <span>3</span>
                </a>
            </Menu>
        </Container>
    );
}

export default Header;