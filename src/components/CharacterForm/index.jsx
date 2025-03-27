import React, { useReducer } from 'react'
import { Container } from '../CharacterSheet/style'
import { backgrounds } from '../../rules/backgrounds'

const reduce = (state, action) => {
  if (action.type === 'set_background') {
    return { ...state, selectedBackground: action.payload }
  }

  return state
}

const initialState = {
  selectedBackground: ''
}

const CreateCharacter = () => {
  const [state, dispatch] = useReducer(reduce, initialState)

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
        onChange={(e) => dispatch({ type: 'set_background', payload: e.target.value })}
        >
          <option value='' >Selecione sua origem</option>
          {backgrounds.map((background) => (
          <option key={background.name} value={background.name}>
            {background.name}
          </option>
        ))}
        </select>

        {
          state.selectedBackground &&
          <h3>{`Opções de ${state.selectedBackground}`}</h3>
        }
      </form>
    </Container>
  )
}

export { CreateCharacter }
