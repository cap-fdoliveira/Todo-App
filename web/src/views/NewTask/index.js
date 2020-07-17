import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, ContentForm, Input, Description, Actions, ActionSave } from './styles';

import api from '../../services/api';

function NewTask() {

    const [lateCount, setLateCount] = useState();

    useEffect(() => {
        delayedTask();
    });

    async function delayedTask() {
        await api.get(`/task/filter/late/12:12:12:15:AC`)
        .then(res => {
            setLateCount(res.data.length)
        });
    }

    return (
        <Container>
            <Header lateCount={lateCount} clickNotification={Notification}/>
                <ContentForm>
                    <Input>
                        <span>Título</span>
                        <input type="text"></input>
                    </Input>
                    <Description>
                        <span>Descrição da tarefa</span>
                        <textarea rows={5}/> 
                    </Description>
                    <Input>
                        <span>Data</span>
                        <input type="date"></input>
                    </Input>
                    <Input>
                        <span>Hora</span>
                        <input type="time"></input>
                    </Input>
                    <Actions>
                        <div>
                            <input type="checkbox" />
                            <span>Concluído</span>
                        </div>
                        <button type="botton">Cancelar</button>
                    </Actions>
                    <ActionSave>
                        <button type="button">Salvar</button>
                    </ActionSave>
                    
                </ContentForm>
            <Footer />
        </Container>
    );
}

export default NewTask;