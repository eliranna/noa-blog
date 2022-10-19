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
    margin-bottom: -115px;
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

function Trips() {
    return (
      <Wrapper>
          <Page nerrow>
              <IntroCaption>
                  Case Study: Ludus app. The engaging exam process feature that motivates students to practice and excell in math
              </IntroCaption>
          </Page>
          <Spacer height={"100px"}/>
          <ProjectStrip spread roles={['UX Desinger', 'UX Researcher', 'Visual Desinger']} cover="/assets/ludus/cover.jpg" coverColor={colors.lightBabyBlue} rolesColor={colors.lightred}/>
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
              <Spacer height={spacing.spacing16}/>
              <Paragraph>
                  Times have changed and so the practicing and testing techniques are now obsolete, unappealing and monotonic for children. 
                  Ludus app aimed to solve those problems. In this case study I will present the research we have conducted and the product I 
                  designed to make a better ux for our studens.
              </Paragraph>
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
              </Page>
              <Page>
                  <Photo src='/assets/ludus/interviews.png'/> 
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
                          <EmojListItem emoj={"📷"} emojSize={"30px"}> 
                              <Mark><mark>Pictures:</mark></Mark> Helps illustrate important points
                          </EmojListItem>
                          <Spacer height={spacing.spacing6}></Spacer>
                          <EmojListItem emoj={"✍️"} emojSize={"30px"}> 
                              <Mark><mark>Practice tests:</mark></Mark> helps to reduce anxiety
                          </EmojListItem>
                          <Spacer height={spacing.spacing6}></Spacer>
                          <EmojListItem emoj={"🤲"} emojSize={"30px"}> 
                              <Mark><mark>Teamwork:</mark></Mark> Helps in learning quicker
                          </EmojListItem>
                          <Spacer height={spacing.spacing6}></Spacer>
                          <EmojListItem emoj={"🕹️"} emojSize={"30px"}> 
                              <Mark><mark>Games:</mark></Mark> Adds instant engagement
                          </EmojListItem>
                          <Spacer height={spacing.spacing6}></Spacer>
                          <EmojListItem emoj={"⏸️"} emojSize={"30px"}> 
                              <Mark><mark>Taking a break:</mark></Mark> Helps to effectively retain information
                          </EmojListItem>
                          <Spacer height={spacing.spacing6}></Spacer>
                          <EmojListItem emoj={"📢"} emojSize={"30px"}> 
                              <Mark><mark>Reading out loud:</mark></Mark> Makes it easier for kids to understand
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
                          <Card emoj={"😱"} title="Test Anxiety" cardWidth="218px"> 
                              Users are worried about making mistakes in the exams, and those negative thoughts make them stressed.
                          </Card>
                          <Card emoj={"😟"} title="Lack of motivation" cardWidth="218px"> 
                              Users who have difficulty with math often suffer from lack of motivation because they fear to experience more failures.
                          </Card>
                          <Card emoj={"😴"} title="Boardom" cardWidth="218px"> 
                              Users are simply not being stimulated enough by their school exams settings, so they get board quickly.
                          </Card>
                          <Card emoj={"🙄"} title="Distractions" cardWidth="218px"> 
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
          <Strip backgroundColor={colors.white} noPadding>
              <Page nerrow>
                  <StripTitle align={"left"}> 
                      Competitive audit
                  </StripTitle>
                  <Paragraph align={"left"}>
                      One of the critical steps when developing a new product is finding out where we stand with the competition. 
                      Competitive analysis is a necessary part of the design process to help the business gain valuable insight into 
                      the market, identify the strengths and weaknesses of their products, and develop effective product strategies to 
                      create winning results. To do so, I looked at the competitors and created a competitive audit with Ludus major competitors. 
                  </Paragraph>
              </Page>
              <Spacer height={spacing.spacing32}/>
              <Page>
                  <Photo src='/assets/ludus/table.jpg'/>               
              </Page>
          </Strip>  
          <Strip backgroundColor={colors.deepBabyBlue}>
              <Page nerrow>
                  <StripTitle align={"center"}> 
                      Competitive audit report
                  </StripTitle>
                  <Paragraph align={"center"}>
                      After listing Ludus’ major competitors products, I analysied the information and came to those conclusions:
                  </Paragraph>
                  <Spacer height={spacing.spacing16}/>
              </Page>
              <Page wide>
                  <Paragraph align={"left"}>
                      <CardsList>
                          <Card emoj={"👩‍🏫"} title="Virtual teacher - Mascot" cardWidth="309px"> 
                              Students are guided through the app by a virtual teacher, the app mascot. The mascot gives the students the support, 
                              encouragement, and guidance they need just as their classroom teacher gives them.
                          </Card>
                          <Card emoj={"🧙‍♂️"} title="Virtual student- Avatar" cardWidth="309px"> 
                              There is a reflection of the student in the form of a personalised Avatar.  
                              Whenever the students succeed in the app exams, the Avatar levels up their ranks, looks and abilities. 
                              In fact, the student wants to keep getting better at math so that his avatar can also evolve in the game.
                          </Card>
                          <Card emoj={"🗺️"} title="Visual student progress" cardWidth="309px"> 
                              The student's progress in mathematical subjects is presented visually so that the student can observe it, 
                              follow it and learn from it. Each app offers a unique progress map that helps students navigate the math topics 
                              being taught, and also motivate them to continue learning.
                          </Card>
                      </CardsList>
                  </Paragraph>                
              </Page>
          </Strip>
          <Strip backgroundColor={colors.white}>
              <Page nerrow>
                  <StripTitle align={"center"}> 
                      Value proposition
                  </StripTitle>
                  <Paragraph align={"center"}>
                      I defined the product’s value proposition that summarize why students would love to use the product. 
                      I've created a list of all the great features the app can have and sorted them into main categories. 
                      Next, I connected the benefits to the needs of my users and meets their pain points to identify what was really valuable to them. 
                      The benefits that did not fit into the users needs, were set aside.
                  </Paragraph>
              </Page>
              <Spacer height={'107px'}/>
              <Page>
                  <Photo src="/assets/ludus/value.jpg"/>
              </Page>
          </Strip>             
          <Page>
              <SectionTitle>
                  03  |  Ideation Phase
              </SectionTitle>
          </Page> 
          <Strip backgroundColor={colors.white} noPadding>
              <Page nerrow>
                  <StripTitle align={"center"}> 
                      User flow
                  </StripTitle>
                  <Paragraph align={"center"}>
                      After listing the main features of the app and deciding to focus on the Personalization feature, 
                      I anticipated the needs of the user when interacting with my product by outlining a user flow. The user 
                      flow begins with a user entering the app and continues until the book order confirmation.
                  </Paragraph>
              </Page>
              <Spacer height={'107px'}/>
              <Page nerrow>
                  <Photo src="/assets/ludus/flow.jpg"/>              
              </Page>
          </Strip> 
          <Strip backgroundColor={colors.white} noPadding>
              <Page nerrow>
                  <StripTitle align={"center"}> 
                      Paper wireframes
                  </StripTitle>
                  <Paragraph align={"center"}>
                      After collecting enough information about our users and necessary features, I sketched paper 
                      wireframes that represents the skeleton of the  app interface. I created low-fidelity paper 
                      wireframes for all the possible ideas I could come up with and chose the best ones.
                  </Paragraph>
              </Page>
              <Spacer height={'107px'}/>
              <Page nerrow>
                  <Photo src="/assets/ludus/wireframe.jpg"/>              
              </Page>
          </Strip>  
          <Strip backgroundColor={colors.gray} >
              <Page nerrow>
                  <StripTitle align={"center"}> 
                      Digital wireframes
                  </StripTitle>
                  <Paragraph align={"center"}>
                      After I have explored multiple ideas for wireframes on paper, and understood which wireframe elements will provide 
                      the best user experience, it was time to bring my paper wireframe to life digitally to get the structure right and clean.
                  </Paragraph>
              </Page>
              <Spacer height={'107px'}/>
              <Page>
                  <Photo src="/assets/ludus/dw.png"/>              
              </Page>
          </Strip>  
          <Strip backgroundColor={colors.lightred}>
              <Page nerrow>
                  <StripTitle align={"center"}> 
                      Visual design
                  </StripTitle>
                  <Paragraph align={"center"}>
                      At this point I had enough information to start sketching solutions for users pain points. 
                      I created low-fidelity paper wireframes for all the possible ideas I could come up with. 
                      I analyzed the screens for general usability and to weed out confusing elements.
                  </Paragraph>
                  <Spacer height={'107px'}/>             
              </Page>
              <Page>
                  <Photo src="/assets/ludus/x3.png"/> 
              </Page>
          </Strip> 
          <Strip backgroundColor={colors.white} noPadding>
              <Spacer height={'60px'}/> 
              <Page>
                  <Photo src="/assets/ludus/v1.jpg"/> 
                  <Spacer height={'60px'}/> 
                  <Photo src="/assets/ludus/v2.jpg"/> 
                  <Spacer height={'60px'}/> 
                  <Photo src="/assets/ludus/v3.jpg"/> 
                  <Spacer height={'60px'}/> 
                  <Photo src="/assets/ludus/v4.jpg"/>                            
              </Page>
          </Strip>  
          <Strip backgroundColor={colors.cream} noPadding noPaddingBottom>
              <Page>
                  <Centered>
                      <Photo src="/assets/ludus/Group 219.jpeg" width={'900px'}/> 
                  </Centered>          
              </Page>
          </Strip> 
          <StripSpecial backgroundColor={colors.white}>
              <Greeting>
                  Thank you for watching!
              </Greeting>
              <PhotoGirls src="/assets/ludus/girls.jpg"/>              
          </StripSpecial>       
      </Wrapper>
    );
  }
  
  export default Trips; 