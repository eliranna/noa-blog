import React from 'react'
import styled from 'styled-components'
import Page from '../common/components/Page'
import IntroCaption from '../common/components/IntroCaption'
import Spacer from '../common/components/Spacer'
import Paragraph from '../common/components/Paragraph'
import Quote from '../common/components/Quote'
import { colors, spacing } from '../common/style'
import ProjectStrip from '../components/ProjectStrip'

const Wrapper = styled.div``

function Ludus() {
  return (
    <Wrapper>
        <Page nerrow>
            <IntroCaption>
                Case Study: Ludus app. The engaging exam process feature that motivates students to practice and excell in math
            </IntroCaption>
        </Page>
        <Spacer height={spacing.spacing32}/>
        <ProjectStrip roles={['UX Desinger', 'UX Researcher', 'Visual Desinger']} cover="/assets/ludus/cover.jpg"/>
        <Spacer height={spacing.spacing32}/>
        <Page nerrow>
            <Paragraph>
                UX design for an educational mobile application that helps elementary school students to improve their skills 
                and test themselves in mathematical subjects in an interactive game-like way. Ludos' goal is to help students excell in math 
                through smart analysis of their exams results, but to do so, students must first complete the exams.
            </Paragraph>
            <Spacer height={spacing.spacing16}/>
            <Quote markColor={colors.deepBabyBlue}>
                In the 21st century, children are born into a world full of advanced technologies and various stimuli, and so their 
                (and also ours) attention time is shortened from year to year. But still, <mark>students are asked to solve exams with a pen 
                and paper just as they did 200 years ago.</mark>
            </Quote>
            <Spacer height={spacing.spacing16}/>
        </Page>
    </Wrapper>
  );
}

export default Ludus; 