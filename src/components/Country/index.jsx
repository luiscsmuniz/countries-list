import { useEffect, useState } from 'react'
import { withApollo } from '@apollo/client/react/hoc'
import {
  Col,
  Row,
  Button,
} from 'reactstrap'
import { ShowCountry } from '../../graphql/queries/country'
import { List } from '../core/List'
import { useParams, Link } from 'react-router-dom'

export const Country = withApollo(({
  client,
}) => {
  const [loading, setLoading] = useState(true)
  const [country, setCountry] = useState({})
  const { code } = useParams()

  useEffect(() => {
    const getCountry = async () => {
      const { data } = await client.query({
        query: ShowCountry([
          'name',
          'native',
          'phone',
          'continent { code name }',
          'capital',
          'currency',
          'languages { code name }',
          'emoji',
          'emojiU',
          'states { code name }',
        ]),
        variables: {
          code,
        },
      })
  
      setCountry(data.country)
      setLoading(false)
    }

    getCountry()
  }, [client])

  if (loading) return <p>...carregando</p>

  return (
    <>
      <Row className="mt-2">
        <Col xs={12}>
          <h2>{country.emoji} {country.name}</h2>
          <small>{country.native}</small>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col xs={12}>
          <ul>
            {country.continent && (<li>Continent: {country.continent.name} </li>)}
            {country.capital && (<li>Capital: {country.capital} </li>)}
            {country.currency && (<li>Currency: {country.currency} </li>)}
            {country.phone && (<li>Phone code: {country.phone} </li>)}
            {country.languages.length > 0 && (
              <li>Languages: <List items={country.languages} /></li>
            )}
            {country.states.length > 0 && (
              <li>States: <List items={country.states} /></li>
            )}
          </ul>
        </Col>
        <Col>
          <Button color='dark' tag={Link} to="/">
            Go Back
          </Button>
        </Col>
      </Row>
    </>
  )
})
