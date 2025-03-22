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
              <p style={{ fontSize: 12 }}>Valor</p>
            </div>
            <div>
              <StatBox>+2</StatBox>
              <p style={{ fontSize: 12 }}>Bonus</p>
            </div>
          </div>
        </div>
        <div>
          DEX
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
              <StatBox>10</StatBox>
              <p style={{ fontSize: 12 }}>Valor</p>
            </div>
            <div>
              <StatBox>+2</StatBox>
              <p style={{ fontSize: 12 }}>Bonus</p>
            </div>
          </div>
        </div>
        <div>
          CON
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
              <StatBox>10</StatBox>
              <p style={{ fontSize: 12 }}>Valor</p>
            </div>
            <div>
              <StatBox>+2</StatBox>
              <p style={{ fontSize: 12 }}>Bonus</p>
            </div>
          </div>
        </div>{' '}
        <div>
          INT
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
              <StatBox>10</StatBox>
              <p style={{ fontSize: 12 }}>Valor</p>
            </div>
            <div>
              <StatBox>+2</StatBox>
              <p style={{ fontSize: 12 }}>Bonus</p>
            </div>
          </div>
        </div>{' '}
        <div>
          WIS
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
              <StatBox>10</StatBox>
              <p style={{ fontSize: 12 }}>Valor</p>
            </div>
            <div>
              <StatBox>+2</StatBox>
              <p style={{ fontSize: 12 }}>Bonus</p>
            </div>
          </div>
        </div>{' '}
        <div>
          CHA
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
              <StatBox>10</StatBox>
              <p style={{ fontSize: 12 }}>Valor</p>
            </div>
            <div>
              <StatBox>+2</StatBox>
              <p style={{ fontSize: 12 }}>Bonus</p>
            </div>
          </div>
        </div>
      </StatGrid>
      <SavingThrows>
        <h3>Saving Throws</h3>
        <SavingThrow>
          <span>Strength</span>
          <span>+2</span>
        </SavingThrow>
        <SavingThrow>
          <span>Dexterity</span>
          <span>+0</span>
        </SavingThrow>
        <SavingThrow>
          <span>Constitution</span>
          <span>+2</span>
        </SavingThrow>
        <SavingThrow>
          <span>Intelligence</span>
          <span>+1</span>
        </SavingThrow>
        <SavingThrow>
          <span>Wisdom</span>
          <span>+5</span>
        </SavingThrow>
        <SavingThrow>
          <span>Charisma</span>
          <span>+1</span>
        </SavingThrow>
      </SavingThrows>
    </Container>
  )
}

export { CharacterSheet }
