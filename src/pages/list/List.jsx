import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import {useLocation} from "react-router-dom"
import { useState } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import Searchitem from '../../components/searchitem/SearchItem'

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const ListWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  gap: 20px;
`

const ListSearch = styled.div`
  flex: 1;
  background-color: #febb02;
  padding: 10px;
  border-radius: 10px;
  position: sticky;
  top: 10px;
  height: max-content;
`

const ListResult = styled.div`
  flex: 3;
`

const LsTitle = styled.h1`
  font-size: 20px;
  color: #555;
  margin-bottom: 10px;
`

const LsItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`

const Label = styled.label`
  font-size: 13px;
`

const Input = styled.input`
  height: 30px;
  border:none;
  padding:5px;
`

const Span = styled.span`
  height: 30px;
  padding: 5px;
  background-color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const LsOptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #555;
  font-size: 12px;
`

const LsOptionText = styled.span`
  
`

const LsOptionInput = styled.input`
  width: 50px;
`

const LsOptions = styled.div`
  padding: 10px;
`

const Button = styled.button`
  padding:10px;
  background-color: #0071c2;
  color: white;
  border: none;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
`

const List = () => {

  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setoptions] = useState(location.state.options)
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <ListContainer>
        <ListWrapper>
          <ListSearch>
            <LsTitle>Search</LsTitle>
            <LsItem>
              <Label>Destination</Label>
              <Input placeholder={destination} type="text" />
            </LsItem>

            <LsItem>
              <label>Check-in Date</label>
              <Span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</Span>
              {openDate && <DateRange onChange={(item) => setDate([item.selection])} minDate={new Date()} ranges={date} />}
            </LsItem>
            <LsItem>
              <label>Options</label>
              <LsOptions>
              <LsOptionItem>
                <LsOptionText>Min price <small>per night</small></LsOptionText>
                <LsOptionInput type="number"/>
              </LsOptionItem>

              <LsOptionItem>
                <LsOptionText>Max price <small>per night</small></LsOptionText>
                <LsOptionInput type="number"/>
              </LsOptionItem>

              <LsOptionItem>
                <LsOptionText>Adult</LsOptionText>
                <LsOptionInput type="number" min={1} placeholder={options.adult}/>
              </LsOptionItem>

              <LsOptionItem>
                <LsOptionText>Children</LsOptionText>
                <LsOptionInput type="number" min={0} placeholder={options.children}/>
              </LsOptionItem>

              <LsOptionItem>
                <LsOptionText>Room</LsOptionText>
                <LsOptionInput type="number" min={1} placeholder={options.room}/>
              </LsOptionItem>
              </LsOptions>
            </LsItem>
            <Button>Search</Button>
          </ListSearch>
          <ListResult>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
          </ListResult>
        </ListWrapper>
      </ListContainer>
    </div>
  )
}

export default List