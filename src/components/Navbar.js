import React from 'react'
import styled from 'styled-components'
import { spacing, colors } from '../common/style'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${spacing.spacing24} 0px;
`

const Logo = styled.div`
    font-weight: 600;
    font-size: 24px;
    color: ${colors.text};
`

const Menu = styled.div`

`

function Navbar() {
  return (
    <Wrapper>
        <Logo>
            <Link to='/'>
                <span>Noa Maller</span>
            </Link>
        </Logo>
        <Menu>

        </Menu>
    </Wrapper>
  );
}

export default Navbar; 