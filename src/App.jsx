import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import { useState } from 'react'

function App() {

  const [keyword, setKeyword] = useState('');

  const handleSearch = (event) => {
        console.log(event.target.value)
        setKeyword(event.target.value);
        console.log("##########",keyword);
    }
  return (
    <>
    <h1>Phone Book</h1>
    <ContactForm/>
    <SearchBox handleSearch={handleSearch} keyword={keyword}/>
    <ContactList/>
    </>
  )
}

export default App
