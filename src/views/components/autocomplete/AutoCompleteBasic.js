import { useState } from 'react'
import AutoComplete from '@components/autocomplete'

const AutoCompleteBasic = function() {
  const [suggestions] = useState([
    {
      title: 'React.js',
    },
    {
      title: 'Angular.js',
    },
    {
      title: 'Javascript',
    },
    {
      title: 'Vue.js',
    },
    {
      title: 'HTML',
    },
    {
      title: 'CSS',
    },
    {
      title: 'SCSS',
    },
    {
      title: 'PHP',
    },
    {
      title: 'Laravel',
    },
  ])

  return (
    <AutoComplete
      suggestions={suggestions}
      className="form-control"
      filterKey="title"
      suggestionLimit={4}
      placeholder="Type 'a'"
    />
  )
}
export default AutoCompleteBasic
