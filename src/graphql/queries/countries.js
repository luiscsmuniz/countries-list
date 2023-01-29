import gql from 'graphql-tag'

export const ShowCountries = (types) => {
  const query = gql(`
    query Countries {
      countries {
        code
        ${types === undefined ? '' : types.join(' ')}
      }
    }
  `)

  return query
}
