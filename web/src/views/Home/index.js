import React, { useState } from 'react';
import { Container, FilterArea } from './styles';
import Header from '../../components/Header';
import Filter from '../../components/Filter';
import Task from '../../components/Task';
import Footer from '../../components/Footer';

function Home() {
  const [filter, setFilter] = useState();
  return (
    <Container>
      <Header />
      <FilterArea>
        <Filter title="All" actived={filter === 'all'} onClick={() => setFilter("all")} />
        <Filter title="Today" actived={filter === 'today'} onClick={() => setFilter("today")} />
        <Filter title="Week" actived={filter === 'week'} onClick={() => setFilter("week")} />
        <Filter title="Month" actived={filter === 'month'} onClick={() => setFilter("month")} />
        <Filter title="Year" actived={filter === 'year'} onClick={() => setFilter("year")} />
      </FilterArea>
      <Task />
      <Footer />
    </Container>
  );
}

export default Home;