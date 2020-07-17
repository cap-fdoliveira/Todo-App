import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const FilterArea = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;

    button{
        background: none;
        border: none;
        width: 20%;
    }
`;

export const Title = styled.div`
    width: 100%;
    margin-top: 40px;
    border-bottom: 1px solid #dcdcdc;
    display: flex;
    justify-content: center;
`;

export const Label = styled.div`
    color: #dcdcdc;
    font-size: 22px;
    font-weight: bold;
    position: relative;
    top: 10px;
    background: #363636;
    padding: 0 20px;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;