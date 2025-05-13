import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'

function App() {
 
  return (
    <>
    <h1>Phone Book</h1>
    <ContactForm/>
    <SearchBox/>
    <ContactList/>
    </>
  )
}

export default App
