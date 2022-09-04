import styled from 'styled-components'

import React from 'react'

const Footerf = styled.div`
    width: 100%;
    width: 1024px;
    font-size: 12px;
`

const FLists = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const FList = styled.ul`
    list-style: none;
    padding: 0;
`

const FListItem = styled.li`
    margin-bottom: 10px;
    color: #003580;
    cursor: pointer;
`

const FText = styled.div``

const Footer = () => {
  return (
    <Footerf>
      <FLists>
        <FList>
            <FListItem>Countries</FListItem>
            <FListItem>Regions</FListItem>
            <FListItem>Cities</FListItem>
            <FListItem>Districts</FListItem>
            <FListItem>Airports</FListItem>
            <FListItem>Hotels</FListItem>
        </FList>

        <FList>
            <FListItem>Countries</FListItem>
            <FListItem>Regions</FListItem>
            <FListItem>Cities</FListItem>
            <FListItem>Districts</FListItem>
            <FListItem>Airports</FListItem>
            <FListItem>Hotels</FListItem>
        </FList>

        <FList>
            <FListItem>Countries</FListItem>
            <FListItem>Regions</FListItem>
            <FListItem>Cities</FListItem>
            <FListItem>Districts</FListItem>
            <FListItem>Airports</FListItem>
            <FListItem>Hotels</FListItem>
        </FList>

        <FList>
            <FListItem>Countries</FListItem>
            <FListItem>Regions</FListItem>
            <FListItem>Cities</FListItem>
            <FListItem>Districts</FListItem>
            <FListItem>Airports</FListItem>
            <FListItem>Hotels</FListItem>
        </FList>

        <FList>
            <FListItem>Countries</FListItem>
            <FListItem>Regions</FListItem>
            <FListItem>Cities</FListItem>
            <FListItem>Districts</FListItem>
            <FListItem>Airports</FListItem>
            <FListItem>Hotels</FListItem>
        </FList>
      </FLists>
      <FText>Copyright © 2022 Booking.com</FText>
    </Footerf>
  )
}

export default Footer
