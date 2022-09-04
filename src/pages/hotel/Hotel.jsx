import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown, faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { useState } from 'react'

const HotelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

const HotelWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`

const BookNow = styled.button`
  position: absolute;
  top: 10px;
  right: 0;
  border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`

const HotelTitle = styled.h1`
  font-size: 24px;
`

const HotelAddress = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`

const HotelDistance = styled.span`
  color: #0071c2;
  font-weight: 500;
`

const HotelPriceHighlight = styled.span`
  color: #008009;
  font-weight: 500;
`

const HotelImages = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const HotelImgWrapper = styled.div`
  width: 33%;
`

const HotelImg = styled.img`
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`

const HotelDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`

const HotelDetailsText = styled.div`
  flex: 3;
`

const HotelDetailsPrice = styled.div`
  flex: 1;
  background-color: #ebf3ff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const H1 = styled.h1`
  font-size: 18px;
  color: #555;
`

const H2 = styled.h2`
  font-weight: 300;
`

const Span = styled.span`
  font-size: 14px;
`

const Button = styled.button`
  border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
`

const HotelDesc = styled.p`
  font-size: 14px;
  margin-top: 20px;
`

const Slider = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.426);
  z-index: 999;
  display: flex;
  align-items: center;
`

const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SliderImg = styled.img`
  width: 80%;
  height: 80vh;
`

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ]

  const handleOpen = (i)=>{
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber

    if (direction === "l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <HotelContainer>
        {open && <Slider>
          <FontAwesomeIcon icon={faCircleXmark} onClick={()=>setOpen(false)} style={{position: 'absolute', top:'20px', right:'20px', fontSize:'30px', color:'white', cursor:'pointer'}}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} onClick={()=> handleMove("l")} style={{margin: '20px', fontSize:'50px', color:'white', cursor:'pointer'}}/>
          <SliderWrapper>
            <SliderImg src={photos[slideNumber].src} alt=""/>
          </SliderWrapper>
          <FontAwesomeIcon icon={faCircleArrowRight} onClick={()=> handleMove("r")} style={{margin: '20px', fontSize:'50px', color:'white', cursor:'pointer'}}/>
        </Slider>}
        <HotelWrapper>
          <BookNow>Reserve or Book Now!</BookNow>
          <HotelTitle>Grand Hotel</HotelTitle>
          <HotelAddress>
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Bolivar 160, Monserrat</span>
          </HotelAddress>
          <HotelDistance>Excellent location - 500m from center</HotelDistance>
          <HotelPriceHighlight>Book a stay over $114 at this property and get a free airport taxi</HotelPriceHighlight>
          <HotelImages>
            {photos.map((photo, i)=>(
              <HotelImgWrapper>
                <HotelImg onClick={()=>handleOpen(i)} src={photo.src}/>
              </HotelImgWrapper>
            ))}
          </HotelImages>
          <HotelDetails>
             <HotelDetailsText>
              <HotelTitle>Stay in the heart of Buenos Aires</HotelTitle>
              <HotelDesc>
              Located in the historic district of Buenos Aires, the five-star NH City Buenos Aires hotel features
              an impressive art-deco façade and striking interiors. Guests can enjoy panoramic views of the city while 
              sunbathing and swimming in rooftop swimming pool. Gym facilities are also available and WiFi is free in all areas.
              NH City Buenos Aires is conveniently located within easy access to the city’s commercial center and surrounded by several 
              important historical buildings and monuments of Buenos Aires, including the Cabildo and Plaza de Mayo Square.
              The NH City Buenos Aires offers a daily breakfast buffet with a broad variety of warm and cold items.
              Guests can also enjoy a brisk workout in NH City Buenos Aires' gym. Gym is not available 24 hs, please note the 
              open and closure hours. These complimentary facilities are available upon request. The helpful staff can assist 
              you with tour bookings and other tourist services.
              </HotelDesc>
             </HotelDetailsText>
             <HotelDetailsPrice>
              <H1>Perfect for a 9-night</H1>
              <Span>
                Located in the heart of Buenos Aires, this hotel has an excellent location score of 9.2
              </Span>
              <H2>
                <b>$945</b> (9 nights)
              </H2>
              <Button>Reserve or Book Now!</Button>
             </HotelDetailsPrice>
          </HotelDetails>
        </HotelWrapper>
        <MailList/>
        <Footer/>
      </HotelContainer>
    </div>
  )
}

export default Hotel