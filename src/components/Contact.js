import React from "react"
import styled from "styled-components"

import * as S from "./styles"

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: #183c28;
  background: #eec643;
  border: none;
  border-radius: 3px;
`

const TextArea = styled.textarea`
  padding: 0.5em;
  margin: 0.5em;
  color: #183c28;
  background: #eec643;
  border: none;
  border-radius: 3px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export default () => {
  return (
    <S.Window id="contact">
      <S.StyledH1>Contact</S.StyledH1>
      <S.Container>
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="Contact Form"
          action="/thank-you"
        >
          <input type="hidden" name="form-name" value="Contact Form" />
          <Column>
            <label>Email</label>
            <Input type="email" name="email" />
          </Column>
          <Column>
            <label>Name</label>
            <Input type="text" name="name" />
          </Column>
          <Column>
            <label>Message</label>
            <TextArea type="text" name="message" />
          </Column>
          <S.SmallButton type="submit">Submit</S.SmallButton>
        </form>
      </S.Container>
    </S.Window>
  )
}
