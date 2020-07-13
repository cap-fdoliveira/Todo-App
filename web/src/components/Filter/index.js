import React from 'react';
import { Container, FilterButton } from './styles'
import { FiFilter } from 'react-icons/fi';

function Filter({ title, actived }) {
    return (
        <Container>
            <FilterButton actived={actived}>
                <FiFilter size={25} color='#dcdcdc' />
                <span>{ title }</span>
            </FilterButton>
        </Container>
    );
}

export default Filter;