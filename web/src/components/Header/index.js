import React from 'react';
import logo from '../../assets/logo-todo2.png';
import { Container, Logotype, Menu } from './styles';
import { FiBell } from 'react-icons/fi';
import { Link } from 'react-router-dom';


function Header({ lateCount, clickNotification }) {

    return (
        <Container>
            <Logotype>
                <img src={logo} alt="logotipo do app" />
            </Logotype>
            <Menu>
                <Link to="/">INÍCIO</Link>
                <span className="divider" />
                <Link to="/task">NOVA TAREFA</Link>
                <span className="divider" />
                <a href="#">SINCRONIZAR CELULAR</a>
                <span className="divider" />
                <button id="notification" onClick={clickNotification}>
                    <FiBell size={28} color="#dcdcdc"/>
                <span>{lateCount}</span>
                </button>
            </Menu>
        </Container>
    );
}

export default Header;