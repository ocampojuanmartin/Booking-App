import React from 'react'
import Featured from '../../components/featured/Featured'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import styled from 'styled-components'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const HomeContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

const HomeTitle = styled.h1`
  width: 1024px;
  font-size: 20px;
`

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <HomeContainer>
          <Featured/>
          <HomeTitle>Browse by property type</HomeTitle>
          <PropertyList/>
          <HomeTitle>Home guests love</HomeTitle>
          <FeaturedProperties/>
          <MailList/>
          <Footer/>
        </HomeContainer>
    </div>
  )
}

export default Home