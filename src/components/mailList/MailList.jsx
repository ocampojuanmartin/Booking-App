import styled from 'styled-components'

import React from 'react'

const Mail = styled.div`
    width: 100%;
    margin-top: 50px;
    background-color: #003580;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 50px;
`

const MailTitle = styled.h1`
    
`

const MailDesc = styled.span`
    
`

const MailInputContainer = styled.div`
    
`

const Button = styled.button`
    height: 50px;
    background-color: #0071c2;
    color: white;
    font-weight: 500;
    border:none;
    border-radius: 5px;
    cursor: pointer;
`

const Input = styled.input`
    width: 300px;
    height: 30px;
    padding: 10px;
    border: none;
    margin-right: 10px;
`

const MailList = () => {
  return (
    <Mail>
      <MailTitle>Save time, save money!</MailTitle>
      <MailDesc>Save time, save money!</MailDesc>
      <MailInputContainer>
        <Input type="text" placeholder="Your Email" />
        <Button>Subscribe</Button>
      </MailInputContainer>
    </Mail>
  )
}

export default MailList
