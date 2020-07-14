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
    border: none;
    border-color: none;
    background: ${props => props.actived ? '#708090' : '#4F4F4F'};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    box-shadow: 10px 10px 40px 0px rgba(0,0,0,0.75);

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