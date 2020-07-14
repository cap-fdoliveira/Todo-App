import React, { useState, useEffect } from 'react';
import { Container, FilterArea, Title, Label, Content } from './styles';
import Header from '../../components/Header';
import Filter from '../../components/Filter';
import Task from '../../components/Task';
import Footer from '../../components/Footer';
import api from '../../services/api';

function Home() {
  const [filter, setFilter] = useState('all');
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    await api.get(`/task/filter/${filter}/12:12:12:15:AC`)
    .then(res => {
      setTasks(res.data);
      console.log(res.data);
    });
  }

  useEffect(() => {
    loadTasks();
  }, [filter]);

  return (
    <Container>
      <Header />
      <FilterArea>
        <Filter title="Todas" actived={filter === 'all'} onClick={() => setFilter("all")} />
        <Filter title="Hoje" actived={filter === 'today'} onClick={() => setFilter("today")} />
        <Filter title="Semana" actived={filter === 'week'} onClick={() => setFilter("week")} />
        <Filter title="Mês" actived={filter === 'month'} onClick={() => setFilter("month")} />
        <Filter title="Ano" actived={filter === 'year'} onClick={() => setFilter("year")} />
      </FilterArea>
      <Title>
        <Label>
          Tasks
        </Label>
      </Title>
      <Content>
        {
          tasks.map(data => (
            <Task
              type={data.type}
              title={data.title}
              date={data.date} 
            />
          ))
        }
      </Content>
      <Footer />
    </Container>
  );
}

export default Home;