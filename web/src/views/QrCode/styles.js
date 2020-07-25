import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Content = styled.div`
    width: 50%;
    margin: 8em auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1, p {
        color: #dcdcdc;
    }
`;

export const CodeArea = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
`;

export const ValidationCode = styled.div`
    width: 55%;
    color: #dcdcdc;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    span{
        color: #dcdcdc;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    button{
        width: 100%;
        margin-top: 25px;
        color: #dcdcdc;
        font-size: 18px;
        font-weight: bold;
        background: #836FFF;
        border-radius: 5px;
        border: none;
        cursor: pointer;

        &:hover{
            opacity: 0.5;
        }
    }
`;

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    input{
        color: #dcdcdc;
        font-size: 16px;
        background: none;
        border: none;
        border-bottom: 1px solid #836FFF;
        text-align: center;
    }
`;