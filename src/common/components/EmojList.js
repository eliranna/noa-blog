import React from 'react'
import styled from 'styled-components'
import { spacing, colors } from '../style'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const ListItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: ${spacing.spacing3};
`

const Emoj = styled.div`
    margin-right: ${spacing.spacing4};
`

const Caption = styled.div`

`

function EmojListItem({children, emoj}) {
  return (
    <ListItemWrapper>
        <Emoj>
            {emoj}
        </Emoj>
        <Caption>
            {children}
        </Caption>
    </ListItemWrapper>
  );
}

function EmojList({children}) {
  return (
    <Wrapper>
        {children}
    </Wrapper>
  );
}

export {
    EmojList,
    EmojListItem
}; 