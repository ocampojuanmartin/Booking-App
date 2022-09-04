import React from 'react'
import styled from 'styled-components'

const FeaturedCont = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    z-index:1;
`

const FeaturedItem = styled.div`
    position: relative;
    color: white;
    border-radius: 10px;
    overflow: hidden;
    height: 350px;
    width: 350px;
`

const FeaturedImg = styled.img`
    width: 400px;
    height: 300px;
 
`

const FeaturedTitles = styled.div`
    position: absolute;
    bottom: 20px;
`
const City = styled.h1`
    
`

const Properties = styled.h2`
    
`

const Featured = () => {
  return (
    <FeaturedCont>
        <FeaturedItem>
            <FeaturedImg src='https://www.riotgames.com/darkroom/1440/54a2ba6c2326849e9a510bc5c911d1f1:75aaa0b0e61fc3c3b8145ddb0f21febb/adobestock-125612765.jpeg' alt=''/>
            <FeaturedTitles>
                <City>Dublin</City>
                <Properties>123 properties</Properties>
            </FeaturedTitles>
        </FeaturedItem>

        <FeaturedItem>
            <FeaturedImg src='https://images.unsplash.com/photo-1588993608283-7f0eda4438be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXVzdGluJTIwdGV4YXN8ZW58MHx8MHx8&w=1000&q=80' alt=''/>
            <FeaturedTitles>
                <City>Austin</City>
                <Properties>545 properties</Properties>
            </FeaturedTitles>
        </FeaturedItem> 

        <FeaturedItem>
            <FeaturedImg src='https://upload.wikimedia.org/wikipedia/commons/4/41/Reno_arch.jpg' alt=''/>
            <FeaturedTitles>
                <City>Reno</City>
                <Properties>345 properties</Properties>
            </FeaturedTitles>
        </FeaturedItem> 
    </FeaturedCont>
  )
}

export default Featured