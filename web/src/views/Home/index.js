import React, { useState, useEffect } from 'react';
import { Container, FilterArea, Title, Label, Content } from './styles';
import Header from '../../components/Header';
import Filter from '../../components/Filter';
import Task from '../../components/Task';
import Footer from '../../components/Footer';
import api from '../../services/api';
import { Link } from 'react-router-dom';

function Home() {
  const [filter, setFilter] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [lateCount, setLateCount] = useState();

  useEffect(() => {
    fetchTasks();    
    delayedTask();
  });

  async function fetchTasks() {
    await api.get(`/task/filter/${filter}/12:12:12:15:AC`)
    .then(res => {
      setTasks(res.data)
    });
  }

  async function delayedTask() {
    await api.get(`/task/filter/late/12:12:12:15:AC`)
    .then(res => {
      setLateCount(res.data.length);
    });
  }

  function notification() {
    setFilter('late');
  }

  return (
    <Container>
      <Header lateCount={lateCount} clickNotification={notification} />
      <FilterArea>
        <button type ="button" onClick={() => setFilter("all")}>
          <Filter title="Todas" actived={filter === 'all'} />
        </button>
        <button type ="button" onClick={() => setFilter("today")}>
          <Filter title="Hoje" actived={filter === 'today'} />
        </button>
        <button type ="button" onClick={() => setFilter("week")}>
          <Filter title="Semana" actived={filter === 'week'} />
        </button>
        <button type ="button" onClick={() => setFilter("month")}>
          <Filter title="Mês" actived={filter === 'month'} />
        </button>
        <button type ="button" onClick={() => setFilter("year")}>
          <Filter title="Ano" actived={filter === 'year'} />
        </button>
      </FilterArea>
      <Title>
        <Label>
        {filter === 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}
        </Label>
      </Title>
      <Content>
        {
          tasks.map(data => (
            <Link to={`/task/${data._id}`}>
              <Task
                key= {String(Math.random())}
                type={data.type}
                title={data.title}
                date={data.date}
                done={data.done}
              />
            </Link>
          ))
        }
      </Content>
      <Footer />
    </Container>
  );
}

export default Home;