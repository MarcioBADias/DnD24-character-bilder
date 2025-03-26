import React from 'react'
import { Container } from '../CharacterSheet/style'
import { backgrounds } from '../../rules/backgrounds'

const CreateCharacter = () => {
  return (
    <Container>
      <form>
        <label>
            Selecione sua <span>Origem</span> / Antecedentes
        </label>
        {
            backgrounds.map((bg ) => (
                <select type="text" name="background" placeholder='bacckground'>
            <option value="">
                
            </option>
        </select>
            ))
        }
      </form>
    </Container>
  )
}

export { CreateCharacter }
