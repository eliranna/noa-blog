import React from 'react'
import styled from 'styled-components'
import { spacing, colors } from '../common/style'
import { Link } from 'react-router-dom'
import Spacer from '../common/components/Spacer'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${spacing.spacing24} 0px;
    padding-bottom: 200px;
`

const Logo = styled.div`
    font-weight: 600;
    font-size: 24px;
    color: ${colors.text};
`

const Menu = styled.div`

`

const Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    img {
        width: 30px;
    }
    img:hover {
        opacity: 0.6;
    }
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
            <Links>
              <a href="https://www.linkedin.com/in/noa-maller/" target="_blank">
                  <img src="/assets/1.png" />
              </a>
              <Spacer width={'10px'}></Spacer>
              <a href="https://dribbble.com/noamaller" target="_blank">
                  <img src="/assets/2.png" />
              </a>
              <Spacer width={'10px'}></Spacer>
              <a href="mailto:noamaller@gmail.com" target="_blank">
                  <img src="/assets/3.png" />
              </a>
            </Links>
        </Menu>
    </Wrapper>
  );
}

export default Navbar; 