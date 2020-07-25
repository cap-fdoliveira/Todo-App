import React, { useState, useEffect } from 'react';
import { Container, FilterArea, Title, Label, Content } from './styles';
import Header from '../../components/Header';
import Filter from '../../components/Filter';
import Task from '../../components/Task';
import Footer from '../../components/Footer';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import connected from '../../utils/Connected';

function Home() {
  const [filter, setFilter] = useState('all');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/task/filter/${filter}/${connected}`);
      setTasks(data);
    })();
  }, [filter]);

  function notification() {
    setFilter('late');
  }

  return (
    <Container>
      <Header clickNotification={notification} />
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
            <Link to={`/task/${data._id}`} key={data._id}>
              <Task
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