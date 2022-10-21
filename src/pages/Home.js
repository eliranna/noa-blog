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

const Mark = styled.mark`
    background-color: ${colors.marker};
`

function Home() {
  return (
    <Wrapper>
        <Page nerrow>
            <IntroCaption>
                Hey there! I'm Noa, a <Mark>UX/UI designer </Mark>experienced in UX research and Visual Design. I'm excited about creating delightful digital experiences that help & inspire people.
            </IntroCaption>
            <Spacer height={'100px'}/>
            <ProjectsList>
                <Project>
                    <Link to="/projects/bookstore">
                        <Cover src="/assets/bookstore/thumb.jpg"/>
                    </Link>
                </Project> 
                <Spacer height={spacing.spacing16}/>
                <Project>
                    <Link to="/projects/ludus">
                        <Cover src="/assets/ludus/ludus-cover.jpeg"/>
                    </Link>
                </Project>
                <Spacer height={spacing.spacing16}/> 
                <Project>
                    <Link to="/projects/trips">
                        <Cover src="/assets/trips/trips-cover.jpg"/>
                    </Link>
                </Project>
            </ProjectsList>
        </Page>
    </Wrapper>
  );
}

export default Home; 