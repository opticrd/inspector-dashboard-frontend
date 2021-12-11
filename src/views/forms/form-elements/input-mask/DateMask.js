import { Fragment } from 'react'
import Cleave from 'cleave.js/react'

const DateMask = function() {
  const options = { date: true, delimiter: '-', datePattern: ['Y', 'm', 'd'] }
  return (
    <>
      <label htmlFor="date">Date</label>
      <Cleave
        className="form-control"
        placeholder="2001-01-01"
        options={options}
        id="date"
      />
    </>
  )
}

export default DateMask
