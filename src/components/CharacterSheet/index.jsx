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
  FeatureTitle,
  Field,
  Header,
  OpenFieldButton,
  StatBox,
  StatGrid,
} from './style'

const reduce = (state, action) => {
  if (action.type === 'set_section') {
    return {
      ...state,
      openSection: state.openSection === action.section ? null : action.section,
      openField: null,
    }
  }
  if (action.type === 'set_field') {
    return {
      ...state,

      openField: state.openField === action.index ? null : action.index,
    }
  }

  return state
}

const initialState = {
  level: 4,
  background: 'Acolyte',
  race: 'Variant Human',
  class: 'cleric',
  subClass: null,
  characterImg:
    'https://i0.wp.com/dmdave.com/wp-content/uploads/2019/01/space-cleric-2-1.jpg?fit=600%2C338&ssl=1',
  hp: 17,
  speed: 30,
  ac: 18,
  init: 2,
  openSection: null,
  openField: null,
}

const CharacterSheet = () => {
  const [state, dispatch] = useReducer(reduce, initialState)
  return (
    <Container>
      <div>
        <img
          style={{ maxHeight: '20%', width: '100%', borderRadius: 10 }}
          src={state.characterImg}
          alt="Avatar do personagem"
        />
      </div>
      <Header>
        <div>
          <CharacterName>Nome do Personagem</CharacterName>
          <span>{`${state.background} ${state.race} ${state.class} ${state.level}`}</span>
        </div>
        <StatBox>{`HP: ${state.hp}`}</StatBox>
      </Header>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '28%' }}>
          <StatBox style={{ height: '50%' }}>{`Speed: ${state.speed}`}</StatBox>
          <StatBox>{`Init: ${state.init}`}</StatBox>
        </div>
        <div style={{ width: '40%' }}>
          <StatBox
            style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              height: '90%',
              textAlign: 'center',
            }}
          >
            <span>AC:</span>
            <span style={{ fontSize: 50 }}>{state.ac}</span>
          </StatBox>
        </div>
        <div style={{ width: '28%' }} v>
          <StatBox>Rest</StatBox>
          <StatBox>Heroic Inspiration</StatBox>
        </div>
      </div>
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
        <OpenFieldButton
          onClick={() => dispatch({ type: 'set_section', section: 'skills' })}
        >
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
        <OpenFieldButton
          onClick={() => dispatch({ type: 'set_section', section: 'actions' })}
        >
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
              <Field
                style={{
                  alignItems: 'center',
                  border: '1px gold solid',
                  cursor: 'pointer',
                  minHeight: 60,
                  width: '30%',
                  justifyContent: 'center',
                }}
              >
                <span>Action</span>
              </Field>
              <Field
                style={{
                  alignItems: 'center',
                  cursor: 'pointer',
                  minHeight: 60,
                  width: '30%',
                  justifyContent: 'center',
                }}
              >
                <span>Bonnus Action</span>
              </Field>
              <Field
                style={{
                  alignItems: 'center',
                  cursor: 'pointer',
                  minHeight: 60,
                  width: '30%',
                  justifyContent: 'center',
                }}
              >
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
        <OpenFieldButton
          onClick={() => dispatch({ type: 'set_section', section: 'features' })}
        >
          <GiMightyForce />
          <h3>Features</h3>
          {state.openSection === 'features' ? (
            <IoMdArrowDropupCircle />
          ) : (
            <IoMdArrowDropdownCircle />
          )}
        </OpenFieldButton>
        {state.openSection === 'features' && (
          <FeatureField>
            {CharacterClass.class?.[state.class].features
              ?.filter((item) => item.level <= state.level)
              .map((feature, i) => (
                <FeatureText key={i}>
                  <FeatureTitle>
                    <span style={{ fontSize: 10 }}>{`Level: ${feature.level}`}</span>
                    <h2>{feature.title}</h2>
                    <div
                      style={{ cursor: 'pointer' }}
                      onClick={() => dispatch({ type: 'set_field', index: i })}
                    >
                      <span style={{ fontSize: 10 }}>
                        {feature.referenceBook}
                      </span>
                      <span>{state.openField === i ? ' [-]' : ' [+]'}</span>
                    </div>
                  </FeatureTitle>
                  {state.openField === i && (
                    <div
                      style={{ marginTop: 20 }}
                      dangerouslySetInnerHTML={{ __html: feature.text }}
                    />
                  )}
                </FeatureText>
              ))}
          </FeatureField>
        )}
      </Content>

      <Content>
        <OpenFieldButton
          onClick={() => dispatch({ type: 'set_section', section: 'spells' })}
        >
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
        <OpenFieldButton
          onClick={() => dispatch({ type: 'set_section', section: 'iventory' })}
        >
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
        <OpenFieldButton
          onClick={() =>
            dispatch({ type: 'set_section', section: 'background' })
          }
        >
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
