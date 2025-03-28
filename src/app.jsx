import { CreateCharacter } from './components/CharacterForm'
import { CharacterSheet } from './components/CharacterSheet'

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 50,
      }}
    >
      <CreateCharacter/>
      <CharacterSheet/>
    </div>
  )
}

export { App }
