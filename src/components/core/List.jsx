import { v4 as uuid } from 'uuid'

export const List = ({
  items,
}) => (
  <ul>
    {
      items.map(language => (
        <li key={uuid()}>{language.name}</li>
      ))
    }
  </ul>
)

List.defaultProps = {
  items: []
}