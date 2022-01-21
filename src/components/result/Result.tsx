import { SearchResult } from '../../page/Home'

interface ResultProps {
  result: SearchResult | undefined
}

export const Result = ({ result }: ResultProps) => {
  if (result?.error) {
    return <article>NO RESULT ASSOCIATED WITH YOUR SEARCH YO</article>
  }
  if (result?.acronym) {
    return (
      <article>
        {result?.acronym} means {result?.definition}
      </article>
    )
  }
  return null
}
