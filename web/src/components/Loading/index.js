import React from 'react';
import Skeleton from '@yisheng90/react-loading';
import { Container, LoadingArea } from './styles';

function Loading() {
    return (
        <Container>
            <LoadingArea>
                <Skeleton height={20} color="#836FFF" />
            </LoadingArea>
        </Container>
    );
}

export default Loading;