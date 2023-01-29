import gql from 'graphql-tag'

export const ShowCountry = (types) => {
  const query = gql(`
    query Country($code: ID!){
      country(code: $code) {
        code
        ${types === undefined ? '' : types.join(' ')}
      }
    }
  `)

  return query
}
