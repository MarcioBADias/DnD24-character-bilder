import React, { useReducer } from 'react'
import { Container } from '../CharacterSheet/style'
import { backgrounds } from '../../rules/backgrounds'

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
  return state
}

const initialState = {
  selectedBackground: '',
  selectedAbilityBonus: '',
  selectedEquipmentOption: '',
  selectedEquipment: '',
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

  return (
    <Container>
      <form>
        <label>
          Selecione sua <span>Origem</span> / Antecedentes
        </label>
        <select
          name="background"
          id="background"
          value={state.selectedBackground}
          onChange={(e) =>
            dispatch({ type: 'set_background', payload: e.target.value })
          }
        >
          <option value="">Selecione sua origem</option>
          {backgrounds.map((background) => (
            <option key={background.name} value={background.name}>
              {background.name}
            </option>
          ))}
        </select>

        {state.selectedBackground && (
          <div>
            <h3 style={{ margin: '1rem 0' }}>
              Você escolheu{' '}
              <span style={{ color: 'gold' }}>{state.selectedBackground}</span>
            </h3>
            <label>Selecione seus bônus de atributos por origem:</label>
            <select
              name="backgroundAtt"
              id="backgroundAtt"
              value={state.selectedAbilityBonus}
              onChange={(e) =>
                dispatch({ type: 'set_ability_bonus', payload: e.target.value })
              }
            >
              <option value="">Selecione seus pontos</option>
              {abilityOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <label>Selecione seu equipamento:</label>
            <select
              name="backgroundEquipOption"
              id="backgroundEquipOption"
              value={state.selectedEquipmentOption}
              onChange={(e) =>
                dispatch({
                  type: 'set_equipment_option',
                  payload: e.target.value,
                })
              }
            >
              <option value="">Selecione uma opção</option>
              {equipmentOptions.map((eq) => (
                <option key={eq.option} value={eq.option}>
                  Opção {eq.option}
                </option>
              ))}
            </select>

            {state.selectedEquipmentOption && (
              <p>
                <strong>Seu equipamento é:</strong>{' '}
                {selectedEquipmentDescription}
              </p>
            )}
          </div>
        )}
      </form>
    </Container>
  )
}

export { CreateCharacter }
