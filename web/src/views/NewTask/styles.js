
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const ContentForm = styled.div`
    width: 50%;
    height: auto;
    margin: 10em auto;
`;

export const Input = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;

    span{
        color: #dcdcdc;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    input{
        color: #dcdcdc;
        font-size: 16px;
        background: none;
        border: none;
        border-bottom: 1px solid #836FFF
    }
`;

export const Description = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;

    span{
        color: #dcdcdc;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    textarea{
        color: #dcdcdc;
        background: none; 
        border-radius: 10px;
        border: 2px solid #836FFF;
    }
`;

export const Actions = styled.div`
    width: 80%;
    margin: 30px auto;
    align-items: center;
    display: flex;
    justify-content: space-between;

    input{
        background: none;
        border: 2x solid #836FFF;
    }

    span{
        color: #dcdcdc;
        margin-left: 5px;
    }

    button{
        color: #dcdcdc;
        font-size: 16px;
        background: none;
        border: none;
        cursor: pointer;

        &:hover{
            opacity: 0.5;
        }
    }
`;

export const ActionSave = styled.div`
    width: 80%;
    margin: 30px auto;
    align-items: center;

    button{
        width: 100%;
        margin: auto;
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