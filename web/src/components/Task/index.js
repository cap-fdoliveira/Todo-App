import React from 'react';
import { Container, TaskCard, Description, Title, TaskDate, Hour } from './styles';
import { FiCalendar } from 'react-icons/fi';

function Task() {
    return (
        <Container>
            <TaskCard>
                <Description>
                    <FiCalendar size={50} color="#dcdcdc"/>
                    <Title>Terminar esse programa</Title>
                </Description>
                <TaskDate>
                    11/08/2020
                    <Hour>16:00</Hour>
                </TaskDate>
            </TaskCard>
        </Container>
    );
}

export default Task;