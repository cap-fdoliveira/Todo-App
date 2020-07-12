import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    background: #363636	;
    border-bottom: 5px solid #836FFF;
`;

export const Logotype = styled.image`
    display: flex;
    align-items: center;
    width: 50%;
    height: 70px;
    margin: 0 10px;
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 50%;
    height: 70px;
    margin: 0 20px;

    a {
        color: #dcdcdc;
        font-weight: bold;
        text-decoration: none;
        font-size: 18px;
        margin: 0 10px;

        &:hover{
            color: #708090;
        }
    }
    #notification {
            span {
            background: #dcdcdc;
            color: #836FFF;
            padding: 1px 6px;
            border-radius: 50%;
            position: relative;
            top: -25px;
            right: 10px;
            font-size: 12px;
        }

        &:hover {
            opacity: 0.5;
        }
    }

    .divider::after{
        content: "|";
        color: #dcdcdc;
        margin: 0 10px;
        font-size: 18px;
    }

`;
