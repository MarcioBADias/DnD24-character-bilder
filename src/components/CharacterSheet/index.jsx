import React, { useReducer } from 'react'
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from 'react-icons/io'
import { attributes, skills } from '../../initial_data'
import { CharacterClass } from '../../rules/class'
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
  Content,
  FeatureField,
  FeatureText,
  Field,
  Header,
  OpenFieldButton,
  StatBox,
  StatGrid,
} from './style'


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

      <Content>
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
            <Field key={i}>
              <span>{skill.name}</span>
              <span>+{skill.value}</span>
            </Field>
          ))}
      </Content>

      <Content>
        <OpenFieldButton onClick={() => dispatch({ section: 'actions' })}>
          <GiZeusSword />
          <h3>Actions</h3>
          {state.openSection === 'actions' ? (
            <IoMdArrowDropupCircle />
          ) : (
            <IoMdArrowDropdownCircle />
          )}
        </OpenFieldButton>
        {state.openSection === 'actions' && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Field style={{ alignItems: 'center', minHeight: 60 }}>
                <span>Action</span>
              </Field>
              <Field style={{ alignItems: 'center', minHeight: 60 }}>
                <span>Bonnus Action</span>
              </Field>
              <Field style={{ alignItems: 'center', minHeight: 60 }}>
                <span>Reaction</span>
              </Field>
            </div>
            <div>
              <Field>
                <span>Longsword: +4</span>
                <span>Reach: 5ft</span>
                <span>Damage: 1d8 +2 Slashing</span>
              </Field>
              <Field>
                <span>Firebolt: +4</span>
                <span>Reach: 120ft</span>
                <span>Damage: 1d8 Fire</span>
              </Field>
              <Field>
                <span>Sacred Flame: 14</span>
                <span>Reach: 120ft</span>
                <span>Damage: 1d8 Lighting</span>
              </Field>
            </div>
          </>
        )}
      </Content>

      <Content>
        <OpenFieldButton onClick={() => dispatch({ section: 'features' })}>
          <GiMightyForce />
          <h3>Features</h3>
          {state.openSection === 'features' ? (
            <IoMdArrowDropupCircle />
          ) : (
            <IoMdArrowDropdownCircle />
          )}
        </OpenFieldButton>
        {state.openSection === 'features' && (
            <FeatureField>{
                CharacterClass.class.barbarian.features.map((feature, i) => (
                  <FeatureText key={i}>
                    <h2>{feature.title}</h2>
                    <div style={{ marginTop: 20 }} dangerouslySetInnerHTML={{ __html: feature.text }} />
                  </FeatureText>
                ))}
            </FeatureField>
        )}
      </Content>

      <Content>
        <OpenFieldButton onClick={() => dispatch({ section: 'spells' })}>
          <GiSpellBook />
          <h3>Spells</h3>
          {state.openSection === 'spells' ? (
            <IoMdArrowDropupCircle />
          ) : (
            <IoMdArrowDropdownCircle />
          )}
        </OpenFieldButton>

      </Content>

      <Content>
        <OpenFieldButton onClick={() => dispatch({ section: 'iventory' })}>
          <GiPaperBagFolded />
          <h3>Iventory</h3>
          {state.openSection === 'iventory' ? (
            <IoMdArrowDropupCircle />
          ) : (
            <IoMdArrowDropdownCircle />
          )}
        </OpenFieldButton>
      </Content>

      <Content>
        <OpenFieldButton onClick={() => dispatch({ section: 'background' })}>
          <GiPaperBagFolded />
          <h3>Background</h3>
          {state.openSection === 'background' ? (
            <IoMdArrowDropupCircle />
          ) : (
            <IoMdArrowDropdownCircle />
          )}
        </OpenFieldButton>
      </Content>
    </Container>
  )
}

export { CharacterSheet }
