import React from 'react'

const CharSelectOptions = ({ name, selectState, inChange, doc, optItem }) => {
  return (
    <select name={name} id={name} value={selectState} onChange={inChange}>
      <option value="">Selecione uma das opções</option>
      {doc.map((item, i) => (
        <option key={i} value={optItem ? item[`${optItem}`] : item}>
          {optItem ? item[`${optItem}`] : item}
        </option>
      ))}
    </select>
  )
}

export { CharSelectOptions }
