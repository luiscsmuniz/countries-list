import { Container } from 'reactstrap'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import './App.css'
import { Countries } from './components/Countries'
import { Header } from './components/Header'

export default function App() {
  return (
    <>
      <Header />
      <Container fluid>
        <Router>
          <Routes>
            <Route exact path="/" element={<Countries />} />
            <Route path="/country/:code" element={() => console.log('ok')} />
          </Routes>
        </Router>
        
      </Container>
    </>
  )
}
