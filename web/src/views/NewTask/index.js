import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, ContentForm, Input, Description, Actions, ActionSave } from './styles';
import { format } from 'date-fns';

import api from '../../services/api';

function NewTask({ match }) {

    const [redirect, setRedirect] = useState(false);
    const [lateCount, setLateCount] = useState();
    const [id, setId] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macaddress, setMacaddress] = useState('12:12:12:15:AC');

    useEffect(() => {
        delayedTask();
        taskDetail();
    }, []);

    async function taskDetail() {
        await api.get(`/task/${match.params.id}`)
        .then(res => {
            setTitle(res.data.title)
            setDescription(res.data.description)
            setDate(format (new Date(res.data.date), 'yyyy-MM-dd'))
            setHour(format (new Date(res.data.date), 'HH:mm'))
            setDone(res.data.done)
        });
    }

    async function delayedTask() {
        await api.get(`/task/filter/late/12:12:12:15:AC`)
        .then(res => {
            setLateCount(res.data.length)
        });
    }

    async function save() {
        if (match.params.id) {
            await api.put(`/task/${match.params.id}`, {
                macaddress,
                title,
                description,
                date: `${date}T${hour}:00.000`,
                done,
            })
            .then(res => {
                setRedirect(true)
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            await api.post(`/task`, {
                macaddress,
                title,
                description,
                date: `${date}T${hour}:00.000`,
                done,
            })
            .then(res => {
                setRedirect(true)
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    return (
        <Container>
            { redirect && <Redirect to='/' />}
            <Header lateCount={lateCount} clickNotification={Notification}/>
                <ContentForm>
                    <Input>
                        <span>Título</span>
                        <input type="text" 
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </Input>
                    <Description>
                        <span>Descrição da tarefa</span>
                        <textarea rows={5}
                            value={description}
                            onChange={e => setDescription(e.target.value)}/> 
                    </Description>
                    <Input>
                        <span>Data</span>
                        <input type="date" 
                            value={date}
                            onChange={e => setDate(e.target.value)}
                        />
                    </Input>
                    <Input>
                        <span>Hora</span>
                        <input type="time" 
                            value={hour}
                            onChange={e => setHour(e.target.value)}
                        />
                    </Input>
                    <Actions>
                        <div>
                            <input type="checkbox" 
                                checked={done}
                                onChange={() => setDone(!done)} 
                            />
                            <span>Concluído</span>
                        </div>
                        <button type="botton">Cancelar</button>
                    </Actions>
                    <ActionSave>
                        <button type="button" onClick={save}>Salvar</button>
                    </ActionSave>
                    
                </ContentForm>
            <Footer />
        </Container>
    );
}

export default NewTask;