import React, { useReducer, useState } from 'react'
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from 'react-icons/io'
import {
  GiSpellBook,
  GiZeusSword,
  GiMightyForce,
  GiBullseye,
  GiPaperBagFolded,
} from 'react-icons/gi'
import {
  AttrField,
  CharacterName,
  Container,
  Header,
  OpenFieldButton,
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

const reduce = (state, action) => {
  return {
    ...state,
    openSection: state.openSection === action.section ? null : action.section,
  }
}

const initialState = {
  openSection: null,
}

const CharacterSheet = () => {
  const [state, dispatch] = useReducer(reduce, initialState)
  return (
    <Container>
      <Header>
        <CharacterName>Nome do Personagem</CharacterName>
        <StatBox>HP: 17/17</StatBox>
      </Header>
      <StatGrid>
        {attributes.map((attr, i) => (
          <div key={i}>
            {attr.type}
            <AttrField>
              <div>
                <StatBox>{attr.value}</StatBox>
                <span style={{ fontSize: 12 }}>Valor</span>
              </div>
              <div>
                <StatBox>{attr.bonus}</StatBox>
                <span style={{ fontSize: 12 }}>Bonus</span>
              </div>
            </AttrField>
            <span style={{ color: 'gold', fontSize: 10 }}>
              Saving Throws: {attr.saving}
            </span>
          </div>
        ))}
      </StatGrid>

      <Skills>
        <OpenFieldButton onClick={() => dispatch({ section: 'skills' })}>
          <GiBullseye />
          <h3>Skills</h3>
          {state.openSection === 'skills' ? (
            <IoMdArrowDropupCircle />
          ) : (
            <IoMdArrowDropdownCircle />
          )}
        </OpenFieldButton>
        {state.openSection === 'skills' &&
          skills.map((skill, i) => (
            <Skill key={i}>
              <span>{skill.name}</span>
              <span>+{skill.value}</span>
            </Skill>
          ))}
      </Skills>

      <Skills>
        <OpenFieldButton onClick={() => dispatch({ section: 'actions' })}>
          <GiZeusSword />
          <h3>Actions</h3>
          {state.openSection === 'actions' ? (
            <IoMdArrowDropupCircle />
          ) : (
            <IoMdArrowDropdownCircle />
          )}
        </OpenFieldButton>
      </Skills>

      <Skills>
        <OpenFieldButton onClick={() => dispatch({ section: 'features' })}>
          <GiMightyForce />
          <h3>Features</h3>
          {state.openSection === 'features' ? (
            <IoMdArrowDropupCircle />
          ) : (
            <IoMdArrowDropdownCircle />
          )}
        </OpenFieldButton>
      </Skills>

      <Skills>
        <OpenFieldButton onClick={() => dispatch({ section: 'spells' })}>
          <GiSpellBook />
          <h3>Spells</h3>
          {state.openSection === 'spells' ? (
            <IoMdArrowDropupCircle />
          ) : (
            <IoMdArrowDropdownCircle />
          )}
        </OpenFieldButton>
      </Skills>

      <Skills>
        <OpenFieldButton>
          <GiPaperBagFolded onClick={() => dispatch({ section: 'iventory' })} />
          <h3>Iventory</h3>
          {state.openSection === 'iventory' ? (
            <IoMdArrowDropupCircle />
          ) : (
            <IoMdArrowDropdownCircle />
          )}
        </OpenFieldButton>
      </Skills>

      <Skills>
        <OpenFieldButton onClick={() => dispatch({ section: 'background' })}>
          <GiPaperBagFolded />
          <h3>Background</h3>
          {state.openSection === 'background' ? (
            <IoMdArrowDropupCircle />
          ) : (
            <IoMdArrowDropdownCircle />
          )}
        </OpenFieldButton>
      </Skills>
    </Container>
  )
}

export { CharacterSheet }
