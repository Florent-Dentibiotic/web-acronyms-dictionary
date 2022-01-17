import { useState } from 'react'
import { Form } from '../components/form/Form'
import { Result } from '../components/result/Result'

export type SearchResult = {
  acronym?: string
  definition?: string
  error: boolean
}
type ResultState = SearchResult | undefined

export const Home = () => {
  const [result, setResult] = useState(undefined as ResultState)

  const onResult = (result: SearchResult) => setResult(result)

  return (
    <>
      <Form onResult={onResult} />
      <Result result={result} />
    </>
  )
}
