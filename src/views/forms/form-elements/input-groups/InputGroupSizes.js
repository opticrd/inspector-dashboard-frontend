import { Fragment } from 'react'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap'

const InputGroupSizes = function() {
  return <>
    <InputGroup className="mb-1" size="lg">
      <InputGroupAddon addonType="prepend">@</InputGroupAddon>
      <Input placeholder="username" />
    </InputGroup>

    <InputGroup className="mb-1">
      <InputGroupAddon addonType="prepend">@</InputGroupAddon>
      <Input placeholder="username" />
    </InputGroup>

    <InputGroup size="sm">
      <InputGroupAddon addonType="prepend">@</InputGroupAddon>
      <Input placeholder="username" />
    </InputGroup>
  </>
}

export default InputGroupSizes
