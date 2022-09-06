import React from 'react'
import styled from 'styled-components'
import { spacing, colors, fontSizes } from '../style'
import { Link } from 'react-router-dom'
import Spacer from './Spacer'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${spacing.spacing3};
    background-color: ${colors.white};
    border-radius: 10px;
    margin: ${spacing.spacing4};
    padding: ${spacing.spacing16} ${spacing.spacing8};
    flex-grow: 0;
    flex-shrink: 0;
    width: ${props => props.cardWidth}
`

const Emoj = styled.div`
    font-size: 40px;

`

const Caption = styled.div`
    font-size: ${fontSizes.normal};

`

const Title = styled.div`
    font-size: ${fontSizes.title};
    whitespace: nowrap;
    font-weight: 600;
`

function Card({children, emoj, title, cardWidth}) {
  return (
    <CardWrapper cardWidth={cardWidth}>
        <Emoj>
            {emoj}
        </Emoj>
        <Spacer height={spacing.spacing8}/>
        <Title>
            {title}
        </Title>
        <Spacer height={spacing.spacing8}/>
        <Caption>
            {children}
        </Caption>
    </CardWrapper>
  );
}

function CardsList({children}) {
  return (
    <Wrapper>
        {children}
    </Wrapper>
  );
}

export {
    CardsList,
    Card
}; 