import React from "react"
import styled from "styled-components"

import * as S from "./styles"

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export default () => {
  return (
    <S.Window id="contact">
      <h1>Contact</h1>
      <S.Container>
        <Form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
        >
          <label>Email</label>
          <Input type="email" name="email" />
          <label>Name</label>
          <Input type="text" name="name" />
          <label>Message</label>
          <Input type="text" name="message" />
          <S.SmallButton>Submit</S.SmallButton>
        </Form>
      </S.Container>
    </S.Window>
  )
}
