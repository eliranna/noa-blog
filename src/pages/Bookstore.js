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
    width: 100%;
`

const StripSpecial = styled(Strip)`
    padding-bottom: 0px;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const Greeting = styled.div`
    text-align: center;
    margin-bottom: 220px;
    font-size: ${fontSizes.large};
`

const PhotoTeddy = styled.img`
    width: 400px;
    align-self: center;
    margin-bottom: 50px;
`

function Bookstore() {
  return (
    <Wrapper>
        <Page nerrow>
            <IntroCaption>
                Case Study: Children Bookstore app. The feature that will personally help caregivers find the right children book
            </IntroCaption>
        </Page>
        <Spacer height={spacing.spacing32}/>
        <ProjectStrip spread={true} roles={['UX Desinger', 'UX Researcher', 'Visual Desinger']} cover="/assets/bookstore/cover.jpg" rolesColor={colors.lightYellow}/>
        <Spacer height={spacing.spacing32}/>
        <Page nerrow>
            <Paragraph>
                As a new mom to a sweet little boy, I wanted to find some nice books he could read and learn from. Sounds easy right? So I thought. It appears that most bookstore apps are not very child-oriented, and finding the right books for age and content has become quite a challenge. So I have decided to put on my UX designer hat and go out into the wild to explore new ideas and solutions for such apps. 
            </Paragraph>
            <Spacer height={spacing.spacing16}/>
            <Quote markColor={colors.lightBabyBlue}>
                Parents are struggling in finding content-appropriate books for their children. 
                This is because <mark>bookstore apps often do not offer enough children-oriented information about the books they sell. </mark> 
            </Quote>
        </Page>
        <Page>
            <SectionTitle>
                01  |  Emphasize Phase
            </SectionTitle>
        </Page>
        <Strip backgroundColor={colors.green}>
            <Page nerrow>
                <StripTitle align={"center"}>
                    Interviews
                </StripTitle>
                <Paragraph align={"center"}>
                    I have performed interviews with the potential target audiences. We have discussed the various aspects of finding and buying children's books, guided by the following questions: 
                </Paragraph>
                <Spacer height={spacing.spacing16}/>
                <CardsList>
                    <Card cardWidth="250px" emoj={"🔍"}> 
                        Please describe the way you search and buy a book
                    </Card>
                    <Card cardWidth="250px" emoj={"✨"}> 
                        What are the reasons you buy a children's book?
                    </Card>
                    <Card cardWidth="250px" emoj={"📚"}> 
                        What leads you in choosing a book?
                    </Card>
                    <Card cardWidth="250px" emoj={"🥹"}> 
                        What difficulties did you encounter while searching for a book to buy?
                    </Card>
                    <Card cardWidth="250px" emoj={"🚀"}> 
                        What would you improve in the experience of searching and buying books?
                    </Card>
                </CardsList>                
            </Page>
        </Strip>
        <Strip backgroundColor={colors.white}>
            <Page nerrow>
                <StripTitle align={"center"}>
                    Empathy Maps
                </StripTitle>
                <Paragraph align={"center"}>
                    Next, I used empathy maps as a tool to emphasize with the users farthermore, and to identify the users needs. I have broken down all the important needs and points that came up from the interviews and that the app can address.
                </Paragraph>
            </Page>
            <Spacer height={spacing.spacing32}/>
            <Page nerrow>
                <Photo src='/assets/bookstore/emap.jpg'/>                           
            </Page>
        </Strip>
        <Strip backgroundColor={colors.green}>
            <Page nerrow>
                <StripTitle align={"center"}> 
                    Pain Points
                </StripTitle>
                <Paragraph align={"center"}>
                     Talking to potential users and crafting empathy maps helped me to get into the user's mindset, and allowing me to identify their pain points:
                </Paragraph>
                <Spacer height={spacing.spacing16}/>
            </Page>
            <Page wide>
                <Paragraph align={"left"}>
                    <CardsList>
                        <Card emoj={"😵‍💫"} title="Variety" cardWidth="218px"> 
                            Users are overwhelmed by the variety of books and have difficulties choosing suitable books.
                        </Card>
                        <Card emoj={"🤔"} title="Lack of information" cardWidth="218px"> 
                            Bookstore apps often do not offer enough children-oriented information about the books they sell.
                        </Card>
                        <Card emoj={"😮‍💨"} title="No spare time" cardWidth="218px"> 
                            Users do not have enough spare time to invest in researching for suitable books.
                        </Card>
                    </CardsList>
                </Paragraph>                
            </Page>
        </Strip>
        <Strip backgroundColor={colors.white}>
            <Page nerrow>
                <StripTitle align={"center"}> 
                    User Persona
                </StripTitle>
                <Paragraph align={"center"}>
                    In the world of UX design, the user always comes first. But to put users' needs first, we need to know who we are talking about. So based on everything I have learned so far, I started building the user persona. The persona I created represents a group of users with similar characteristics that I learned about during my research.
                </Paragraph>
                <Spacer height={spacing.spacing16}/>
            </Page>
            <Spacer height={spacing.spacing32}/>
            <Page>
                <Photo src='/assets/bookstore/persona.png'/>  
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
                    Value proposition
                </StripTitle>
                <Paragraph align={"left"}>
                    I wanted to create a product that provide a clear value for my users, so I defined the product’s value proposition that summarize why consumers should use the product.
                </Paragraph>
                <Spacer height={spacing.spacing8}/>
                <Paragraph align={"left"}>
                    To get started, I've created a list of all the great features and benefits of my product. Next I sorted the features and benefits into four main categories of product values ​​identified during user interviews. The benefits that did not fit into the categories and did not add real "value" to the users, were set aside. Next, I connected the benefits to the needs of my users (persona) and meets their pain points to identify what was really valuable to them. Again, the benefits that did not fit into the users needs, were set aside. And there I had it, my app value propositions.
                </Paragraph>
                <Spacer height={spacing.spacing8}/>
                <Paragraph align={"left"}>
                    However, some of these benefits are also offered by my competitors. So in order to define the unique value proposition of my app I had to remove those benefits. I did this by creating a competitive audit.
                </Paragraph>
            </Page>
            <Spacer height={spacing.spacing32}/>
            <Page>
                <Photo src="/assets/bookstore/value-prop.png"/>
            </Page>
        </Strip> 
        <Page>
            <SectionTitle>
                03  |  Ideation Phase
            </SectionTitle>
        </Page>
        <Strip backgroundColor={colors.white} noPadding>
            <Page nerrow>
                <StripTitle align={"left"}> 
                    Competitive audit
                </StripTitle>
                <Paragraph align={"left"}>
                    I have created a competitive audit on three major bookstore competitors. I have listed and analyzed the data and discoverd some features and benefits the compettitors lacked or that could be improved. The benefits which matched to my value proposition are infect my app’s uniqe value proposition. The main feature that that appeared in my uniqe value proposition and which I decided to foucos on in this project is the personalisation feature.
                </Paragraph>
            </Page>
            <Spacer height={spacing.spacing32}/>
            <Page>
                <Photo src="/assets/bookstore/comp.jpg"/>
            </Page>
        </Strip> 
        <Strip backgroundColor={colors.white} noPadding>
            <Page nerrow>
                <StripTitle align={"left"}> 
                    Personalization feature
                </StripTitle>
                <Paragraph align={"left"}>
                    Customizing apps and websites has been one of the hottest trends in user experience design for several years. It's nice to give users a product that will solve their problem, but it's better to offer them the option to adjust the interface to suit their specific needs. And this is exactly what I decided to add to my app, based on the data I have collected up to this point.
                </Paragraph>
                <Paragraph align={"left"}>
                    Upon entering the app, users will answer a number of simple personal questions such as - the age of the child for whom the books are intended, favorite books, areas of interest and the like. The interface will then be updated and will recommend to the user customized books and will save the user a lot of time in searching for relevant books.
                </Paragraph>
            </Page>
        </Strip> 
        <Strip backgroundColor={colors.lightYellow}>
            <Page nerrow>
                <StripTitle align={"center"}> 
                    User flow
                </StripTitle>
                <Paragraph align={"center"}>
                    After listing the main features of the app and deciding to focus on the Personalization feature, I anticipated the needs of the user when interacting with my product by outlining a user flow. The user flow begins with a user entering the app and continues until the book order confirmation.
                </Paragraph>
                <Spacer height={spacing.spacing32}/>
                <Page>
                    <Photo src="/assets/bookstore/flow.png"/>
                </Page>
            </Page>
        </Strip>
        <Strip backgroundColor={colors.white}>
            <Page nerrow>
                <StripTitle align={"center"}> 
                    Paper wireframes
                </StripTitle>
                <Paragraph align={"center"}>
                    At this point I had enough information to start sketching solutions for users pain points. I created low-fidelity paper wireframes for all the possible ideas I could come up with. I analyzed the screens for general usability and to weed out confusing elements.
                </Paragraph>
                <Spacer height={spacing.spacing32}/>
                <Page>
                    <Photo src="/assets/bookstore/wire.jpg"/>
                </Page>
            </Page>
        </Strip> 
        <Strip backgroundColor={colors.gray}>
            <Page nerrow>
                <StripTitle align={"center"}> 
                    Digital wireframes
                </StripTitle>
                <Paragraph align={"center"}>
                    After I have explored multiple ideas for wireframes on paper, 
                    and understood which wireframe elements will provide the best user experience, 
                    it was time to bring my paper-wireframes to life digitally to get the structure right.
                </Paragraph>
            </Page>
            <Spacer height={spacing.spacing32}/>
            <Page>
                <Photo src="/assets/bookstore/digit-wire.png"/>              
            </Page>
        </Strip>  
        <Strip backgroundColor={colors.green}>
            <Page nerrow>
                <StripTitle align={"center"}> 
                    Visual design
                </StripTitle>
                <Paragraph align={"center"}>
                    At this point I had enough information to start sketching solutions for users pain points. 
                    I created low-fidelity paper wireframes for all the possible ideas I could come up with. 
                    I analyzed the screens for general usability and to weed out confusing elements.
                </Paragraph>
            </Page>
            <Spacer height={spacing.spacing32}/>
            <Page>
                <Photo src="/assets/bookstore/visual-design.png"/>              
            </Page>
        </Strip> 
        <Strip backgroundColor={colors.white}>
            <Page>
                <Photo src="/assets/bookstore/1.jpg"/> 
                <Spacer height={spacing.spacing32}/>
                <Photo src="/assets/bookstore/2.jpg"/> 
                <Spacer height={spacing.spacing32}/>
                <Photo src="/assets/bookstore/3.jpg"/>                           
            </Page>
        </Strip>  
        <Strip backgroundColor={colors.lightYellow}>
            <Page nerrow>
                <StripTitle align={"left"}> 
                    Next steps & Takeaways
                </StripTitle>
                <Paragraph align={"left"}>
                    My next steps would be to design the persenolised homescreen and the book info page. I was curious how those screens structure whould look like so I have designed wireframes for them as well. 
                </Paragraph>
                <Paragraph align={"left"}>
                    <ol>
                        <li>
                            Students & working professionals staying away from their homes struggle to find healthy & affordable home-cooked meals.
                        </li>
                        <li>
                            College students and working professionals living in metro cities have a very fast-paced life. With their busy schedules, they have little to no time to cook their 
                        </li>
                        <li>
                            In India, a lot of these young adults subscribe to local tiffin services because they deliver budget-friendly, fresh, and home-cooked meals at their doorstep. But a 
                        </li>
                    </ol>
                </Paragraph>
            </Page>
            <Spacer height={spacing.spacing32}/>
            <Page nerrow>
                <Photo src="/assets/bookstore/next.png"/>              
            </Page>          
        </Strip> 
        <StripSpecial backgroundColor={colors.white}>
            <Greeting>
                Thank you for watching!
            </Greeting>
            <PhotoTeddy src="/assets/bookstore/teddy.png"/>              
        </StripSpecial>           
    </Wrapper>
  )
}

export default Bookstore;

