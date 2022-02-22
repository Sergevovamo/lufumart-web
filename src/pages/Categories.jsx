import React from 'react';
import styled from "styled-components";
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const Container = styled.div`

`;

function Categories() {
  return (
    <div>
        <Container>
            <Announcement />
            <Navbar />
            <h1>Categories</h1>
            <Newsletter />
            <Footer />
        </Container>
    </div>
  )
}

export default Categories