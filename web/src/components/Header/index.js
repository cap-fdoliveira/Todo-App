import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo-todo2.png';
import { Container, Logotype, Menu } from './styles';
import api from '../../services/api';
import { FiBell } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import connected from '../../utils/Connected';
import { Redirect } from 'react-router-dom';


function Header({ clickNotification }) {

    const [lateCount, setLateCount] = useState();
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        delayedTask();
        if (!connected) { setRedirect(true) }
    }, [lateCount]);

    async function delayedTask() {
        await api.get(`/task/filter/late/${connected}`)
            .then(res => {
                setLateCount(res.data.length);
            });
    }

    function logOut() {
        localStorage.removeItem('@todo/macaddress');
        setRedirect(true);
        window.location.reload();
    }

    return (
        <Container>
            { redirect && <Redirect to="/qrcode" /> }
            <Logotype>
                <img src={logo} alt="logotipo do app" />
            </Logotype>
            <Menu>
                {connected && 
                    <>
                        <Link to="/">INÍCIO</Link>
                        <span className="divider" />
                        <Link to="/task">NOVA TAREFA</Link>
                        <span className="divider" />
                        <button 
                            className="exitBtn" 
                            type="button"
                            onClick={logOut}>
                            SAIR
                        </button>
                        <span className="divider" />
                        <button id="notification" onClick={clickNotification}>
                            <FiBell size={28} color="#dcdcdc" />
                            <span>{lateCount}</span>
                        </button>
                    </>
                }
            </Menu>
        </Container >
    );
}

export default Header;