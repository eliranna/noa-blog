import React from 'react'
import styled from 'styled-components'
import Page from '../common/components/Page'
import IntroCaption from '../common/components/IntroCaption'
import Spacer from '../common/components/Spacer'
import { colors, fonts, spacing } from '../common/style'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`

`

const ProjectsList = styled.div`
    display: flex;
    flex-direction: column;
`

const Project = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`

const Cover = styled.img`
    width: 100%;
`

const Strip = styled.div`
    width: 100%;
    background-color: ${colors.lightred};
    dispaly: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 80px;
    padding-bottom: 80px;
    margin-top: 145px;
`

const Caption = styled.div`
    width: 100%;
    text-align: center;
    font-family: ${fonts.serif};
    font-size: 20px;
`

const Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    img {
        width: 55px;
    }
`

const Mark = styled.mark`
    background-color: ${colors.marker};
`

function Home() {
  return (
    <Wrapper>
        <Page nerrow>
            <IntroCaption>
                Hey there! I’m Noa, a <Mark>Product Designer</Mark> with 3+ years experience sketching, 
                building and coaching. I love fun UI, collaboration and making helpful products that connect people.
            </IntroCaption>
            <Spacer height={spacing.spacing32}/>
            <ProjectsList>
                <Project>
                    <Link to="/projects/bookstore">
                        <Cover src="/assets/bookstore/thumb.jpg"/>
                    </Link>
                </Project> 
                <Spacer height={spacing.spacing16}/>
                <Project>
                    <Link to="/projects/ludus">
                        <Cover src="/assets/ludus/cover2.jpeg"/>
                    </Link>
                </Project>
            </ProjectsList>
        </Page>
        <Strip>
            <Caption>
                Get in touch!
            </Caption>
            <Spacer height={'29px'}></Spacer>
            <Links>
                <a href="https://www.linkedin.com/in/noa-maller/" target="_blank">
                    <img src="/assets/1.png" />
                </a>
                <Spacer width={'40px'}></Spacer>
                <a href="https://dribbble.com/noamaller" target="_blank">
                    <img src="/assets/2.png" />
                </a>
                <Spacer width={'40px'}></Spacer>
                <a href="mailto:noamaller@gmail.com" target="_blank">
                    <img src="/assets/3.png" />
                </a>
            </Links>
        </Strip>
    </Wrapper>
  );
}

export default Home; 