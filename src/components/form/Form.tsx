import { useState } from 'react'
import { SearchResult } from '../../page/Home'

interface FormProps {
  onResult: (result: SearchResult) => void
}

export const Form = ({ onResult }: FormProps) => {
  const [textField, setTextField] = useState('')

  const handleChange = (e: any) => {
    setTextField(e.target.value)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const response = await fetch('../../acronyms.json')
      const data = await response.json()
      const [key, value]: any = Object.entries(data).find(
        ([key, _]) => key.toLowerCase() === textField.toLowerCase()
      )
      onResult({ acronym: key, definition: value, error: false })
    } catch (err) {
      onResult({ error: true })
    }
  }

  return (
    <form>
      <label htmlFor="search">What does this acronym mean ?</label>
      <input
        id="search"
        type="search"
        placeholder="Search acronym"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Search</button>
    </form>
  )
}
