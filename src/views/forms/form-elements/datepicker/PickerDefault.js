import { Fragment, useState } from 'react'
import { Label } from 'reactstrap'
import Flatpickr from 'react-flatpickr'

const PickerDefault = function() {
  const [picker, setPicker] = useState(new Date())
  return (
    <>
      <Label for="default-picker">Default</Label>
      <Flatpickr
        className="form-control"
        value={picker}
        onChange={(date) => setPicker(date)}
        id="default-picker"
      />
    </>
  )
}

export default PickerDefault
