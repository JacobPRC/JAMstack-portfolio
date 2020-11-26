import styled from "styled-components"

export const Button = styled.button`
   display: inline-block;
  background-color: #52dec3;
  text-shadow: none;
   padding: 0.3em 1.2em;
   margin: 0 0.3em 0.3em 0;
   border-radius: 2em;
   box-sizing: border-box;
   text-decoration: none;
   font-family: "Roboto", sans-serif;
   font-weight: 300;
   text-align: center;
   transition: all 0.2s;
  background-image: none;
  color: black;

  &:hover {
    background-color: #1ca086;
  }
`

export const SmallButton = styled.button`
   display: inline-block;
  background-color: #52dec3;
  text-shadow: none;
   padding: 0.3em 1.2em;
   margin: 0 0.3em 0.3em 0;
   border-radius: 2em;
   box-sizing: border-box;
   text-decoration: none;
   font-family: "Roboto", sans-serif;
   font-weight: 300;
   text-align: center;
   transition: all 0.2s;
  background-image: none;
  color: black;
  width: 25%;

  &:hover {
    background-color: #1ca086;
  }
`

export const Container = styled.div`
  max-width: 500px;
  height: 95vh;
  margin-top: 2rem auto;
`

export const CenteredContainer = styled.div`
  margin: 3rem auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
`

export const StyledH1 = styled.h1`
  color: #183c28;
`

export const Window = styled.div`
  height: 90vh;
`
