import React from 'react'
import styled from 'styled-components'
import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBed, faPlane, faCar, faTaxi, faCalendarDays, faPerson} from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range'
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; //main css file
import 'react-date-range/dist/theme/default.css'; //theme css file
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
    background-color: #003580;
    color: white;
    display: flex;
    justify-content: center;
    position: relative;
`
const HeaderContainer = styled.div`
    width: 100%;
    max-width: 1024px;
    margin: 20px 0px 100px 0px;
`

const HeaderList = styled.div`
    display: flex;
    gap: 40px;
    margin-bottom: 50px;
`

const HeaderListItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const HeaderListItem1 = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid white;
    padding: 10px;
    border-radius: 20px;
`

const HeaderTitle = styled.h1`
    
`

const HeaderDesc = styled.p`
    margin: 20px 0px;
`

const HeaderButton = styled.button`
    background-color: #0071c2;
    color: white;
    font-weight: 500;
    border: none;
    padding: 10px;
    cursor: pointer;
`

const HeaderSearch = styled.div`
    height: 30px;
    background-color: white;
    border: 3px solid #febb02;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0px;
    border-radius: 5px;
    position: absolute;
    bottom: -25px;
    width: 100%;
    max-width: 1024px;
`

const HeaderSearchItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

// const HeaderIcon = styled.FontAwesomeIcon``

const HeaderSearchInput = styled.input`
    border: none;
    outline: none;
`

const HeaderSearchText = styled.span`
    color: lightgray;
    cursor: pointer;
`

const Options = styled.div`
    position: absolute;
    top: 50px;
    background-color: white;
    color: gray;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.4);
    box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.4);
    z-index:2;
`

const OptionItem = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin: 10px;
`

const OptionText = styled.span`
    
`

const OptionCounterButton = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #0071c2;
    color: #0071c2;
    cursor: pointer;
    background-color: white;
`

const OptionCounter = styled.span`
    display: flex;
    align-items: center;
    gap:10px;
    font-size: 12px;
    color: black;
`

const OptionCounterNumber = styled.span`
    
`

function Header({type}) {
    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult:1,
        children:0,
        rooms:1
    })

    const navigate = useNavigate()

    const handleOption = (name, operation) => {
        setOptions((prev)=>{
            return{
            ...prev,
            [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
        }})
    }

    const handleSearch = ()=>{
        navigate("/hotels", {state:{destination, date, options}})
    }
  return (
    <Container>
        <HeaderContainer>
            <HeaderList>
                <HeaderListItem1>
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </HeaderListItem1>
                
                <HeaderListItem>
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </HeaderListItem>

                <HeaderListItem>
                    <FontAwesomeIcon icon={faCar}/>
                    <span>Car Rentals</span>
                </HeaderListItem>

                <HeaderListItem>
                    <FontAwesomeIcon icon={faBed}/>
                    <span>Attractions</span>
                </HeaderListItem>

                <HeaderListItem>
                    <FontAwesomeIcon icon={faTaxi}/>
                    <span>Airport Taxis</span>
                </HeaderListItem>
            </HeaderList>
            {type !== "list" &&
            <>
            <HeaderTitle>Find your next stay</HeaderTitle>
            <HeaderDesc>
                Search deals on hotels, homes, and much more...
            </HeaderDesc>
            <HeaderButton>Sign In / Register</HeaderButton>
            <HeaderSearch>
                <HeaderSearchItem>
                    <FontAwesomeIcon icon={faBed} style={{color:'lightgray'}}/>
                    <HeaderSearchInput type="text" placeholder="Where are you going?" onChange={e=>setDestination(e.target.value)}/>
                </HeaderSearchItem>

                <HeaderSearchItem>
                    <FontAwesomeIcon icon={faCalendarDays} style={{color:'lightgray'}}/>
                    <HeaderSearchText onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</HeaderSearchText>
                    {openDate && <DateRange
                        style={{'zIndex':'2'}}            
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        className="date"
                        ranges={date}
                        minDate={new Date()}
                    />}
                </HeaderSearchItem>

                <HeaderSearchItem>
                    <FontAwesomeIcon icon={faPerson} style={{color:'lightgray'}}/>
                    <HeaderSearchText onClick={()=>setOpenOptions(!openOptions)}>{`${options.adult} adult · ${options.children} children · ${options.rooms} room`}</HeaderSearchText>
                    {openOptions && <Options>
                        <OptionItem>
                            <OptionText>Adult</OptionText>
                            <OptionCounter>
                                <OptionCounterButton onClick={()=>handleOption("adult", "dec")} disabled={options.adult <=1}>-</OptionCounterButton>
                                <OptionCounterNumber>{options.adult}</OptionCounterNumber>
                                <OptionCounterButton onClick={()=>handleOption("adult", "inc")}>+</OptionCounterButton>
                            </OptionCounter>     
                        </OptionItem>

                        <OptionItem>
                            <OptionText>Children</OptionText>
                            <OptionCounter>
                                <OptionCounterButton onClick={()=>handleOption("children", "dec")} disabled={options.children <=0}>-</OptionCounterButton>
                                <OptionCounterNumber>{options.children}</OptionCounterNumber>
                                <OptionCounterButton onClick={()=>handleOption("children", "inc")}>+</OptionCounterButton>
                            </OptionCounter> 
                        </OptionItem>

                        <OptionItem>
                            <OptionText>Room</OptionText>
                            <OptionCounter>
                                <OptionCounterButton onClick={()=>handleOption("rooms", "dec")} disabled={options.rooms <=1}>-</OptionCounterButton>
                                <OptionCounterNumber>{options.rooms}</OptionCounterNumber>
                                <OptionCounterButton onClick={()=>handleOption("rooms", "inc")}>+</OptionCounterButton>
                            </OptionCounter> 
                        </OptionItem>
                    </Options>}
                </HeaderSearchItem>

                <HeaderSearchItem>
                    <HeaderButton onClick={handleSearch}>Search</HeaderButton>
                </HeaderSearchItem>
            </HeaderSearch>
            </>
            }
        </HeaderContainer>
    </Container>
  )
}

export default Header