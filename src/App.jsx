import { Container } from 'reactstrap'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import './styles/App.css'
import { Countries } from './components/Countries'
import { Header } from './components/Header'
import { Country } from './components/Country'

export default function App() {
  return (
    <>
      <Header />
      <Container fluid>
        <Router>
          <Routes>
            <Route exact path="/" element={<Countries />} />
            <Route path="/country/:code" element={<Country />} />
          </Routes>
        </Router>
        
      </Container>
    </>
  )
}
