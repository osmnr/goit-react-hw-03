import css from './SearchBox.module.css'
import { useState } from 'react'

const SearchBox = () => {
    const [nameValue, setNameValue] = useState('');

    const handleSearch = (event) => {
        setNameValue(event.target.value);
        console.log(nameValue);
    }
    
    return (
        <form onChange={handleSearch} className={css.searchForm}>
        <p>Find contacts by name</p>
        <input type="text" value={nameValue} name="Name" onChange={handleSearch}/>
        </form>
      );
}

export default SearchBox
