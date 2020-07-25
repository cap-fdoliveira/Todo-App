import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    margin-top: 40px;
    opacity: ${props => props.done ? 0.5 : 1};
`;

export const TaskCard = styled.div`
    width: 300px;
    height: 12em;
    padding: 15px;
    margin: 20px;
    border-radius: 10px;
    background: #363636;
    box-shadow: 10px 10px 47px 0px rgba(0,0,0,0.75);
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        opacity: 0.6;
    }

    a{
        width: 80%;
        height: 12em;
    }
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