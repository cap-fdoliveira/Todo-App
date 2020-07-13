import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    margin-top: 40px;
`;

export const FilterButton = styled.button`
    width: 60%;
    height: 90px;
    margin: auto;
    padding: 10px;
    border-radius:10px;
    background: ${props => props.actived ? '#708090' : '#4F4F4F'};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    span{
        color: #dcdcdc;
        font-size: 18px;
        font-weight: bold;
        align-self: flex-end;
    }

    &:hover{
        background: #708090;
    }

`;