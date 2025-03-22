import React from 'react'
import {
  CharacterName,
  Container,
  Header,
  SavingThrow,
  SavingThrows,
  StatBox,
  StatGrid,
} from './style'

const CharacterSheet = () => {
  return (
    <Container>
      <Header>
        <CharacterName>Nome do Personagem</CharacterName>
        <StatBox>HP: 17/17</StatBox>
      </Header>
      <StatGrid>
        <div>
          STR
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
              <StatBox>10</StatBox>
              <span style={{ fontSize: 12 }}>Valor</span>
            </div>
            <div>
              <StatBox>+2</StatBox>
              <span style={{ fontSize: 12 }}>Bonus</span>
            </div>
          </div>
          <span style={{ color: 'gold', fontSize: 10 }}>Saving Throws: +2</span>
        </div>
        <div>
          DEX
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
              <StatBox>10</StatBox>
              <span style={{ fontSize: 12 }}>Valor</span>
            </div>
            <div>
              <StatBox>+2</StatBox>
              <span style={{ fontSize: 12 }}>Bonus</span>
            </div>
          </div>
          <span style={{ color: 'gold', fontSize: 10 }}>Saving Throws: +2</span>
        </div>
        <div>
          CON
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
              <StatBox>10</StatBox>
              <span style={{ fontSize: 12 }}>Valor</span>
            </div>
            <div>
              <StatBox>+2</StatBox>
              <span style={{ fontSize: 12 }}>Bonus</span>
            </div>
          </div>
          <span style={{ color: 'gold', fontSize: 10 }}>Saving Throws: +2</span>
        </div>{' '}
        <div>
          INT
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
              <StatBox>10</StatBox>
              <span style={{ fontSize: 12 }}>Valor</span>
            </div>
            <div>
              <StatBox>+2</StatBox>
              <span style={{ fontSize: 12 }}>Bonus</span>
            </div>
          </div>
          <span style={{ color: 'gold', fontSize: 10 }}>Saving Throws: +2</span>
        </div>{' '}
        <div>
          WIS
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
              <StatBox>10</StatBox>
              <span style={{ fontSize: 12 }}>Valor</span>
            </div>
            <div>
              <StatBox>+2</StatBox>
              <span style={{ fontSize: 12 }}>Bonus</span>
            </div>
          </div>
          <span style={{ color: 'gold', fontSize: 10 }}>Saving Throws: +2</span>
        </div>{' '}
        <div>
          CHA
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
              <StatBox>10</StatBox>
              <span style={{ fontSize: 12 }}>Valor</span>
            </div>
            <div>
              <StatBox>+2</StatBox>
              <span style={{ fontSize: 12 }}>Bonus</span>
            </div>
          </div>
          <span style={{ color: 'gold', fontSize: 10 }}>Saving Throws: +2</span>
        </div>
      </StatGrid>
      <SavingThrows>
        <h3>Skills</h3>
        <SavingThrow>
          <span>AThletic</span>
          <span>+2</span>
        </SavingThrow>
        <SavingThrow>
          <span>Deception</span>
          <span>+0</span>
        </SavingThrow>
        <SavingThrow>
          <span>Insight</span>
          <span>+2</span>
        </SavingThrow>
        <SavingThrow>
          <span>Performace</span>
          <span>+1</span>
        </SavingThrow>
        <SavingThrow>
          <span>Stealth</span>
          <span>+5</span>
        </SavingThrow>
        <SavingThrow>
          <span>Survivor</span>
          <span>+1</span>
        </SavingThrow>
      </SavingThrows>
    </Container>
  )
}

export { CharacterSheet }
