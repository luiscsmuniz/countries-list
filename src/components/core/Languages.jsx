import { v4 as uuid } from 'uuid'

export const Languages = ({
  languages,
}) => (
  <ul>
    {
      languages.map(language => (
        <li key={uuid()}>{language.name}</li>
      ))
    }
  </ul>
)

Languages.defaultProps = {
  languages: []
}