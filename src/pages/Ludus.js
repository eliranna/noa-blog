import React from 'react'
import styled from 'styled-components'
import Page from '../common/components/Page'
import IntroCaption from '../common/components/IntroCaption'
import Spacer from '../common/components/Spacer'
import Paragraph from '../common/components/Paragraph'
import Quote from '../common/components/Quote'
import SectionTitle from '../common/components/SectionTitle'
import { colors, spacing } from '../common/style'
import ProjectStrip from '../components/ProjectStrip'
import { Strip, StripTitle } from '../common/components/Strip'
import { EmojList, EmojListItem } from '../common/components/EmojList'
import { CardsList, Card } from '../common/components/CardsList'

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
            <Quote markColor={colors.lightBabyBlue}>
                In the 21st century, children are born into a world full of advanced technologies and various stimuli, and so their 
                (and also ours) attention time is shortened from year to year. But still, <mark>students are asked to solve exams with a pen 
                and paper just as they did 200 years ago.</mark>
            </Quote>
        </Page>
        <Page>
            <SectionTitle>
                01  |  Emphasize Phase
            </SectionTitle>
        </Page>
        <Strip backgroundColor={colors.deepBabyBlue}>
            <Page nerrow>
                <StripTitle align={"center"}>
                    Interviews
                </StripTitle>
                <Paragraph align={"center"}>
                    We conducted interviews with students age 11, regarding their math exam experience. 
                    The goal was to understand the difficulties and the fun parts of studing and testing in math. 
                    We were guided by the following questions: 
                </Paragraph>
                <Spacer height={spacing.spacing16}/>
                <Paragraph align={"left"}>
                    <ol>
                        <li>
                            What do you enjoy most about math class?
                        </li>
                        <li>
                            How did you feel during the test?
                        </li>
                        <li>
                            How did you prepare for the test?
                        </li>
                        <li>
                            What was difficult for you during the test?
                        </li>
                        <li>
                            What will help you overcome the difficulties during the next exam?
                        </li>
                    </ol>
                </Paragraph>
            </Page>
        </Strip>
        <Strip backgroundColor={colors.white}>
            <Page nerrow>
                <StripTitle align={"left"}> 
                    Studies research
                </StripTitle>
                <Paragraph align={"left"}>
                    Many kids don’t study because they find it boring. No one enjoys staring at the books studying until their brain hurts, 
                    and when studying is boring, kids often don’t retain the information they’re trying to memorize. So in order to eliminate 
                    the old studying routine and to help our users make studying more fun, I conducted an online research to find, what do 
                    they find enjoyable, engaging,  and exciting in order to make studying fun. I have written down the main principles:
                </Paragraph>
                <Spacer height={spacing.spacing16}/>
                <Paragraph align={"left"}>
                    <EmojList>
                        <EmojListItem emoj={"🎃"}> 
                            Pictures: Helps illustrate important points
                        </EmojListItem>
                        <EmojListItem emoj={"🎃"}> 
                            Practice tests: helps to reduce anxiety
                        </EmojListItem>
                        <EmojListItem emoj={"🎃"}> 
                            Group work: Helps in learning quicker
                        </EmojListItem>
                        <EmojListItem emoj={"🎃"}> 
                            Games: Adds instant engagement
                        </EmojListItem>
                        <EmojListItem emoj={"🎃"}> 
                            Taking a break: Helps to effectively retain information
                        </EmojListItem>
                        <EmojListItem emoj={"🎃"}> 
                            Reading out loud: Makes it easier for kids to understand
                        </EmojListItem>
                    </EmojList>
                </Paragraph>
            </Page>
        </Strip>
        <Strip backgroundColor={colors.lightred}>
            <Page nerrow>
                <StripTitle align={"center"}> 
                    Pain Points
                </StripTitle>
                <Paragraph align={"center"}>
                    Talking to Ludus potential users helped us to get into the user's mindset, and allowing us to identify 
                    their pain points during math exams: Test anxiety, lack of motivation, boardom, distractions. 
                </Paragraph>
                <Spacer height={spacing.spacing16}/>
            </Page>
            <Page wide>
                <Paragraph align={"left"}>
                    <CardsList>
                        <Card emoj={"😱"} title="Test Anxiety"> 
                            Users are worried about making mistakes in the exams, and those negative thoughts make them stressed.
                        </Card>
                        <Card emoj={"😟"} title="Lack of motivation"> 
                            Users who have difficulty with math often suffer from lack of motivation because they fear to experience more failures.
                        </Card>
                        <Card emoj={"😴"} title="Boardom"> 
                            Users are simply not being stimulated enough by their school exams settings, so they get board quickly.
                        </Card>
                        <Card emoj={"🙄"} title="Distractions"> 
                            Users tend to be distracted from the exams by external factors so they have a hard time concentrate in the exam.
                        </Card>
                    </CardsList>
                </Paragraph>                
            </Page>
        </Strip>
        <Page>
            <SectionTitle>
                02  |  Define Phase
            </SectionTitle>
            
        </Page>
    </Wrapper>
  );
}

export default Ludus; 