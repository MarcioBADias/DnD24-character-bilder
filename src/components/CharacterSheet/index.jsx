import React from 'react'
import {
  CharacterName,
  Container,
  Header,
  Skill,
  Skills,
  StatBox,
  StatGrid,
} from './style'

const attributes = [
  {
    type: 'STR',
    value: 10,
    bonus: '+2',
    saving: '+2',
  },
  {
    type: 'DEX',
    value: 10,
    bonus: '+2',
    saving: '+2',
  },
  {
    type: 'CON',
    value: 10,
    bonus: '+2',
    saving: '+2',
  },
  {
    type: 'INT',
    value: 10,
    bonus: '+2',
    saving: '+2',
  },
  {
    type: 'WIS',
    value: 10,
    bonus: '+2',
    saving: '+2',
  },
  {
    type: 'CHA',
    value: 10,
    bonus: '+2',
    saving: '+2',
  },
]

const skills = [
  {
    name: 'acrobatics',
    attr: 'DEX',
    value: 0,
    proeficiency: false,
    expertise: false,
  },
  {
    name: 'animal handling',
    attr: 'WIS',
    value: 0,
    proeficiency: false,
    expertise: false,
  },
  {
    name: 'arcana',
    attr: 'INT',
    value: 0,
    proeficiency: false,
    expertise: false,
  },
  {
    name: 'athletics',
    attr: 'STR',
    value: 0,
    proeficiency: false,
    expertise: false,
  },
  {
    name: 'deception',
    attr: 'CHA',
    value: 0,
    proeficiency: false,
    expertise: false,
  },
  {
    name: 'history',
    attr: 'INT',
    value: 0,
    proeficiency: false,
    expertise: false,
  },
  {
    name: 'insight',
    attr: 'WIS',
    value: 0,
    proeficiency: false,
    expertise: false,
  },
  {
    name: 'intimidation',
    attr: 'CHA',
    value: 0,
    proeficiency: false,
    expertise: false,
  },
  {
    name: 'investigation',
    attr: 'INT',
    value: 0,
    proeficiency: false,
    expertise: false,
  },
  {
    name: 'medicine',
    attr: 'WIS',
    value: 0,
    proeficiency: false,
    expertise: false,
  },
  {
    name: 'nature',
    attr: 'INT',
    value: 0,
    proeficiency: false,
    expertise: false,
  },
  {
    name: 'perception',
    attr: 'WIS',
    value: 0,
    proeficiency: false,
    expertise: false,
  },
  {
    name: 'performance',
    attr: 'CHA',
    value: 0,
    proeficiency: false,
    expertise: false,
  },
  {
    name: 'persuasion',
    attr: 'CHA',
    value: 0,
    proeficiency: false,
    expertise: false,
  },
  {
    name: 'religion',
    attr: 'INT',
    value: 0,
    proeficiency: false,
    expertise: false,
  },
  {
    name: 'sleight of hand',
    attr: 'DEX',
    value: 0,
    proeficiency: false,
    expertise: false,
  },
  {
    name: 'stealth',
    attr: 'DEX',
    value: 0,
    proeficiency: false,
    expertise: false,
  },
  {
    name: 'survival',
    attr: 'WIS',
    value: 0,
    proeficiency: false,
    expertise: false,
  },
]

const CharacterSheet = () => {
  return (
    <Container>
      <Header>
        <CharacterName>Nome do Personagem</CharacterName>
        <StatBox>HP: 17/17</StatBox>
      </Header>
      <StatGrid>
        {attributes.map((attr) => (
          <div>
            {attr.type}
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <div>
                <StatBox>{attr.value}</StatBox>
                <span style={{ fontSize: 12 }}>Valor</span>
              </div>
              <div>
                <StatBox>{attr.bonus}</StatBox>
                <span style={{ fontSize: 12 }}>Bonus</span>
              </div>
            </div>
            <span style={{ color: 'gold', fontSize: 10 }}>
              Saving Throws: {attr.saving}
            </span>
          </div>
        ))}
      </StatGrid>
      <Skills>
        <h3>Skills</h3>
        {skills.map((skill) => (
          <Skill>
            <span>{skill.name}</span>
            <span>+{skill.value}</span>
          </Skill>
        ))}
      </Skills>
    </Container>
  )
}

export { CharacterSheet }
