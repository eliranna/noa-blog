import React from 'react'
import styled from 'styled-components'
import Page from '../common/components/Page'
import IntroCaption from '../common/components/IntroCaption'
import Spacer from '../common/components/Spacer'
import Paragraph from '../common/components/Paragraph'
import Quote from '../common/components/Quote'
import SectionTitle from '../common/components/SectionTitle'
import { colors, fontSizes, spacing } from '../common/style'
import ProjectStrip from '../components/ProjectStrip'
import { Strip, StripTitle } from '../common/components/Strip'
import { EmojList, EmojListItem } from '../common/components/EmojList'
import { CardsList, Card } from '../common/components/CardsList'

const Wrapper = styled.div``

const Photo = styled.img`
    width: ${props => props.width ? props.width : '100%'};
`

const PhotoGirls = styled.img`
    width: ${props => props.width ? props.width : '100%'};
    align-self: center;
`
const StripSpecial = styled(Strip)`
    padding-bottom: 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const Greeting = styled.div`
    text-align: center;
    margin-bottom: 118px;
    margin-top: 30px;
    font-size: ${fontSizes.large};
`

const Mark = styled.span`
    mark {
        background-color: ${colors.lightBabyBlue};
    }
`

const Centered = styled.div`
    display: flex;
    justify-content: center;
`

const ImageBlock = styled.div`
    background-color: ${props=>props.color};
    width: 100%;
    height: 447px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    img {
        width: ${props=>props.wide ? '75%' : '150px'};
    }
`

function Trips() {
    return (
      <Wrapper>
          <Page nerrow>
              <IntroCaption>
                  Social media app for travelers. Explore unique routes & get inspired by travelers like yourself.
              </IntroCaption>
          </Page>
          <Spacer height={"100px"}/>
          <ProjectStrip spread roles={['UX Desinger', 'UX Researcher', 'Visual Desinger']} cover="/assets/trips/10.png" coverColor={null} rolesColor={colors.lightOceanBlue}/>
          <Spacer height={spacing.spacing32}/>
          <Page nerrow>
              <Paragraph>
                A social media app for sharing and exploring trip plans around the world. 
                Planning a trip that suits our needs is not always easy. Sometimes, loads of information online can be overwhelming, turning our trip planning into a daunting task. 
              </Paragraph>
              <Spacer height={spacing.spacing16}/>
              <Paragraph>
                This is where Trips comes in! Trips is a social media app that allows users to easily find routes shared by users with similar needs. Build your trip easily, simply, and quickly!
              </Paragraph>
              <Spacer height={spacing.spacing32}/>
          </Page>
          <Strip backgroundColor={colors.lightOceanBlue}>
              <Page nerrow>
                  <StripTitle align={"center"}>
                      Home screen feed
                  </StripTitle>
                  <Paragraph align={"center"}>
                      Welcome to Trip’s home screen feed, where they can search, and browse inspiring trips shared by other travelers. 
                  </Paragraph>
                  <Spacer height={spacing.spacing16}/>                             
              </Page>
              <Page>
                  <Photo src='/assets/trips/1.png'/> 
              </Page>
          </Strip>
          <Strip backgroundColor={colors.white} noPadding>
              <Page nerrow>
                  <Spacer height={"60px"}/>
                  <ImageBlock color={colors.lightred}>
                    <img src="/assets/trips/2.png"/>
                  </ImageBlock>
                  <Spacer height={"60px"}/>
                  <ImageBlock color={colors.lightYellow}>
                    <img src="/assets/trips/3.png"/>
                  </ImageBlock>
              </Page>
          </Strip>
          <Strip backgroundColor={colors.lightOceanBlue}>
              <Page nerrow>
                  <StripTitle align={"center"}>
                      Trip’s overview screen
                  </StripTitle>
                  <Paragraph align={"center"}>
                      This is Trip’s overview screen, where each trip creator shares the most important details about the trip, as well as tips and heads up for future travelers.
                  </Paragraph>
                  <Spacer height={spacing.spacing16}/>                             
              </Page>
              <Page>
                  <Photo src='/assets/trips/4 2.png'/> 
              </Page>
          </Strip>
          <Strip backgroundColor={colors.white} noPadding>
              <Page nerrow>
                  <Spacer height={"60px"}/>
                  <ImageBlock color={colors.lightYellow}>
                    <img src="/assets/trips/5.png"/>
                  </ImageBlock>
                  <Spacer height={"60px"}/>
                  <ImageBlock color={colors.lightred}>
                    <img src="/assets/trips/6.png"/>
                  </ImageBlock>
              </Page>
          </Strip>
          <Strip backgroundColor={colors.lightOceanBlue}>
              <Page nerrow>
                  <StripTitle align={"center"}>
                      Attraction screen
                  </StripTitle>
                  <Paragraph align={"center"}>
                      This is Trip’s attraction screen, where  the most important details about the attraction are mentioned.
                  </Paragraph>
                  <Spacer height={spacing.spacing16}/>                             
              </Page>
              <Page>
                  <Photo src='/assets/trips/7.png'/> 
              </Page>
          </Strip>
          <Strip backgroundColor={colors.white} noPadding noPaddingBottom>
              <Page nerrow>
                  <Spacer height={"60px"}/>
                  <ImageBlock wide color={colors.lightYellow}>
                    <img src="/assets/trips/8.png"/>
                  </ImageBlock>
                  <Spacer height={"60px"}/>
                  <ImageBlock wide color={colors.lightred}>
                    <img src="/assets/trips/9.png"/>
                  </ImageBlock>
                  <Spacer height={"60px"}/>
                  <ImageBlock wide color={colors.lightOceanBlue}>
                    <img src="/assets/trips/10.png"/>
                  </ImageBlock>
              </Page>
          </Strip>
            <StripSpecial backgroundColor={colors.white}>
                <Greeting>
                    Thank you for watching!
                </Greeting>
                <PhotoGirls width={'250px'} src="/assets/trips/11.png"/>              
            </StripSpecial>  
     
      </Wrapper>
    );
  }
  
  export default Trips; 