import styled from 'styled-components'

export const Container = styled.div`
  background: #1a1d21;
  color: white;
  padding: 20px;
  font-family: Arial, sans-serif;
  width: 90vw;
  border-radius: 10px;
  text-align: center;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CharacterName = styled.h2`
  font-size: 20px;
  margin: 0;
`

export const StatBox = styled.div`
  background: #2a2e35;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  margin: 5px 0;
`

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 15px;
`

export const AttrField = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Content = styled.div`
  margin-top: 15px;
`

export const OpenFieldButton = styled.div`
  align-items: center;
  border: 2px gold solid;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
`

export const Field = styled.div`
  background: #2a2e35;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin: 3px 0;
`
