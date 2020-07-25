import React from 'react';

import { Container } from './styles';

function NotificationBar({ data }) {
    
    return (
        <Container data={data}>
            <p>{data ? 'Tarefa atualizada' : 'Tarefa cadastrada'}</p>
        </Container>
    );
}

export default NotificationBar;