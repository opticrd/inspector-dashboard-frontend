import { Fragment } from 'react'
import Cleave from 'cleave.js/react'

const BlocksMask = function() {
  const options = { blocks: [4, 3, 3], uppercase: true }
  return (
    <>
      <label htmlFor="blocks">Blocks</label>
      <Cleave
        className="form-control"
        placeholder="Blocks [4, 3, 3]"
        options={options}
        id="blocks"
      />
    </>
  )
}

export default BlocksMask
