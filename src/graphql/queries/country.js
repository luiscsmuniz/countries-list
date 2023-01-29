import gql from 'graphql-tag'

export const Country = (types) => {
  const query = gql(`
    query Country($code: String!){
      country(code: $code) {
        code
        ${types === undefined ? '' : types.join(' ')}
      }
    }
  `)

  return query
}
