import React, { useState, useEffect} from 'react';
import logo from '../../assets/logo-todo2.png';
import { Container, Logotype, Menu } from './styles';
import api from '../../services/api';
import { FiBell } from 'react-icons/fi';
import { Link } from 'react-router-dom';


function Header({ clickNotification }) {

    const [lateCount, setLateCount] = useState();

    useEffect(() => {
        delayedTask();
    }, [lateCount]);

    async function delayedTask() {
        await api.get(`/task/filter/late/12:12:12:15:AC`)
        .then(res => {
          setLateCount(res.data.length);
        });
      }

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
                <Link to="/qrcode">SINCRONIZAR CELULAR</Link>
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