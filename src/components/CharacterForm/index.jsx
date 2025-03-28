import React, { useReducer } from 'react'
import { Container } from '../CharacterSheet/style'
import { backgrounds } from '../../rules/backgrounds'
import { CharSelectOptions } from '../CharSelectOptions'
import { races } from '../../rules/races'

const reduce = (state, action) => {
  if (action.type === 'set_background') {
    return {
      ...state,
      selectedBackground: action.payload,
      selectedAbilityBonus: '',
      selectedEquipment: '',
    }
  }
  if (action.type === 'set_ability_bonus') {
    return { ...state, selectedAbilityBonus: action.payload }
  }
  if (action.type === 'set_equipment_option') {
    return {
      ...state,
      selectedEquipmentOption: action.payload,
      selectedEquipment: '',
    }
  }
  if (action.type === 'set_race') {
    return {
      ...state,
      selectRace: action.payload
    }
  }
  return state
}

const initialState = {
  selectedBackground: '',
  selectedAbilityBonus: '',
  selectedEquipmentOption: '',
  selectedEquipment: '',
  selectRace: '',
}

const generateAbilityOptions = (abilityScores) => {
  if (!abilityScores || abilityScores.length !== 3) return []
  const [a, b, c] = abilityScores
  return [
    `+1 ${a}, +1 ${b}, +1 ${c}`,
    `+2 ${a}, +1 ${b}`,
    `+2 ${a}, +1 ${c}`,
    `+1 ${a}, +2 ${b}`,
    `+2 ${b}, +1 ${c}`,
    `+1 ${b}, +2 ${c}`,
    `+1 ${a}, +2 ${c}`,
  ]
}

const CreateCharacter = () => {
  const [state, dispatch] = useReducer(reduce, initialState)

  const selectedBackgroundData = backgrounds.find(
    (bg) => bg.name === state.selectedBackground,
  )

  const abilityOptions = selectedBackgroundData
    ? generateAbilityOptions(selectedBackgroundData.abilityScores)
    : []

  const equipmentOptions = selectedBackgroundData
    ? selectedBackgroundData.equipment
    : []

  const selectedEquipmentDescription = equipmentOptions
    .find((eq) => eq.option === state.selectedEquipmentOption)
    ?.items.join(', ')

  const selectedRaceTraits = state.selectRace.traits

  return (
    <Container>
      <form>
        <label>
          Selecione sua <span>Origem</span> / Antecedentes
        </label>

        <CharSelectOptions
          name = "background"
          selectState = {state.selectedBackground}
          doc = {backgrounds}
          optItem = "name"
          inChange={ (e) =>
            dispatch({ type: 'set_background', payload: e.target.value }) }
        />

        {state.selectedBackground && (
          <div>
            <h3 style={{ margin: '1rem 0' }}>
              Você escolheu{' '}
              <span style={{ color: 'gold' }}>{state.selectedBackground}</span>
            </h3>
            <label>Selecione seus bônus de atributos por origem:</label>
            <CharSelectOptions
          name = "backgroundAtt"
          selectState = {state.selectedAbilityBonus}
          doc = {abilityOptions}
          optItem = {null}
          inChange={ (e) =>
            dispatch({ type: 'set_ability_bonus', payload: e.target.value }) }
        />
            <label>Selecione uma opção de equipamentos:</label>
            <CharSelectOptions
          name = "backgroundEquipOption"
          selectState = {state.selectedEquipmentOption}
          doc = {equipmentOptions}
          optItem = "option"
          inChange={ (e) =>
            dispatch({ type: 'set_equipment_option', payload: e.target.value }) }
        />
        {state.selectedEquipmentOption && (
              <p>
                <strong>Seu equipamento é:</strong>{' '}
                {selectedEquipmentDescription}
              </p>
            )}
          </div>
        )}
        <div>
          <label>Selecione sua Raça/Espécie:</label>
          <CharSelectOptions
          name = "race"
          selectState = {state.selectRace}
          doc = {races}
          optItem = "name"
          inChange={ (e) =>
            dispatch({ type: 'set_race', payload: e.target.value }) }
        />
        </div>
        {state.selectRace && (
              <p>
                <strong>Traços Raciais:</strong>{' '}
                {selectedRaceTraits?.map(trait => (
                  <span>{trait}</span>
                ))}
              </p>
            )}
      </form>
    </Container>
  )
}

export { CreateCharacter }
