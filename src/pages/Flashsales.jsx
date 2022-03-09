import React from 'react';
import styled from "styled-components";
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const Container = styled.div`

`;

function Flashsales() {
  return (
    <div>
        <Container>
            <Announcement />
            <Navbar />
            <h1>Flashsales</h1>
            <Newsletter />
            <Footer />
        </Container>
    </div>
  )
}

export default Flashsales