import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import styled from 'styled-components';

import Navbar from './components/Navbar';
import Page from './common/components/Page'
import { colors, fonts } from './common/style';

import Home from './pages/Home'
import Ludus from './pages/Ludus'
import Bookstore from './pages/Bookstore';
import Spacer from './common/components/Spacer'
import Trips from './pages/Trips';

const Wrapper = styled.div`
  color: ${colors.text};
`

const Strip = styled.div`
    width: 100%;
    background-color: ${colors.lightred};
    dispaly: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 80px;
    padding-bottom: 80px;
    margin-top: 115px;
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
    img:hover {
        opacity: 0.6;
    }
`

function App() {
  return (
    <Wrapper>
      <Page>
        <Navbar/>
      </Page>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="projects/ludus" element={<Ludus />}/> 
        <Route path="projects/trips" element={<Trips />}/> 
        <Route path="projects/bookstore" element={<Bookstore />}/> 
      </Routes>
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

export default App;
