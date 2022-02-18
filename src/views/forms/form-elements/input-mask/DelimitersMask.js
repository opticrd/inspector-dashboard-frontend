import { Fragment } from 'react'
import Cleave from 'cleave.js/react'

const DelimitersMask = function() {
  const options = { delimiter: '·', blocks: [3, 3, 3], uppercase: true }
  return (
    <>
      <label htmlFor="delimiters">Delimiters</label>
      <Cleave
        className="form-control"
        placeholder="Delimiter: '.'"
        options={options}
        id="delimiters"
      />
    </>
  )
}

export default DelimitersMask
