import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
`;

export const TaskCard = styled.div`
    width: 20%;
    height: 12em;
    padding: 15px;
    margin: auto;
    border-radius: 10px;
    background: #363636;
`;

export const Description = styled.div`
    width: 100%;
    height: 9em;
    border-radius:10px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
`;

export const Title = styled.div`
    margin-bottom: 5px;
    color: #dcdcdc;
    font-size: 20px;
`;

export const TaskDate = styled.div`
    width: 100%;
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #dcdcdc;
    font-size: 16px;
    border-top: 5px solid #836FFF;
`;

export const Hour = styled.div`
    color: #dcdcdc;
    font-size: 16px;
`;