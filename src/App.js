import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import styled from 'styled-components';

import Navbar from './components/Navbar';
import Page from './common/components/Page'
import { colors } from './common/style';

import Home from './pages/Home'
import Ludus from './pages/Ludus'
import Bookstore from './pages/Bookstore';

const Wrapper = styled.div`
  color: ${colors.text};
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
        <Route path="projects/bookstore" element={<Bookstore />}/> 
      </Routes>
    </Wrapper>
  );
}

export default App;
