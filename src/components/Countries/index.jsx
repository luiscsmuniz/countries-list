import { useEffect, useState } from 'react'
import { withApollo } from '@apollo/client/react/hoc'
import { v4 as uuid } from 'uuid'
import {
  Card,
  CardTitle,
  Button,
  CardSubtitle,
  Row,
  Col,
} from 'reactstrap'
import { Link } from "react-router-dom"
import { ShowCountries } from '../../graphql/queries/countries'
import { List } from '../core/List'
import { Overlay } from '../core/Overlay'

export const Countries = withApollo(({
  client,
}) => {
  const [loading, setLoading] = useState(true)
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const getCountries = async () => {
      const { data } = await client.query({
        query: ShowCountries([
          'name',
          'native',
          'capital',
          'emoji',
          'currency',
          `languages {
            code
            name
          }`,
        ]),
      })
  
      setCountries(data.countries)
      setLoading(false)
    }

    getCountries()
  }, [])

  if (loading) return <Overlay isVisible />

  return (
    <Row className="mt-2">
      {countries.map((country) => (
        <Col key={uuid()} xs={12} sm={6} md={4}>
          <Card
            className="mt-1 ml-1"
            body
          >
            <CardTitle tag="h5">
            {country.emoji} {country.name}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {country.native}
            </CardSubtitle>
            <ul>
              {country.capital && (<li>Capital: {country.capital} </li>)}
              {country.currency && (<li>Currency: {country.currency} </li>)}
              {country.languages.length > 0 && (
                <li>Languages: <List items={country.languages} /></li>
              )}
            </ul>
            <Button color='dark' tag={Link} to={`/country/${country.code}`}>
              Details
            </Button>
          </Card>
        </Col>
      ))}
    </Row>
  )
})
