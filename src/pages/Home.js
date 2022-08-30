import React from 'react'
import styled from 'styled-components'
import Page from '../common/components/Page'
import IntroCaption from '../common/components/IntroCaption'
import Spacer from '../common/components/Spacer'
import { spacing } from '../common/style'
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

function Home() {
  return (
    <Wrapper>
        <Page nerrow>
            <IntroCaption>
                Hey there! I’m Noa, a product designer with 3+ years experience sketching, building and coaching. I love fun UI, collaboration and making helpful products that connect people.
            </IntroCaption>
            <Spacer height={spacing.spacing32}/>
            <ProjectsList>
                <Project>
                    <Link to="/projects/ludus">
                        <Cover src="/assets/ludus/thumb.jpg"/>
                    </Link>
                </Project>
                <Spacer height={spacing.spacing16}/>
                <Project>
                    <Cover/>
                </Project>                
            </ProjectsList>
        </Page>
    </Wrapper>
  );
}

export default Home; 