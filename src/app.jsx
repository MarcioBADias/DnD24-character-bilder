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
      <CharacterSheet />
    </div>
  )
}

export { App }
