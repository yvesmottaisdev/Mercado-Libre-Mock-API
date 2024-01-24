import {React, useEffect, useState} from 'react'
import { useApplyContext } from '../Context/AppContext'

const SearchBar = () => {

  const placeholder_items = [
    "iPhone 13 Pro",
    "Samsung Galaxy S21",
    "Google Pixel 6",
    "Yeti Rambler",
    "Contigo Autoseal Travel Mug",
    "Hydro Flask Coffee Flask",
    "Nike Air Zoom Pegasus",
    "Brooks Ghost 14",
    "Asics Gel-Kayano",
    "To Kill a Mockingbird by Harper Lee",
    "The Great Gatsby by F. Scott Fitzgerald",
    "1984 by George Orwell",
  ];

  const [value, setValue] = useState('');
  const {handleQuery} = useApplyContext();
  const [placeholder, setPlaceholder] = useState('Zara black boots');

  const handleSearch = () => {
    handleQuery(value);
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const textAnimation = () => {

    let text = placeholder_items[Math.floor(Math.random() * placeholder_items.length)];
    setPlaceholder(text)

  }
  
  useEffect(() => {
    setInterval(textAnimation, 3500);
  },[])

  return (
    <div className='search_bar_component'>
        <input type="text" className='search_bar' onChange={handleChange} placeholder={placeholder}/>
        <button type='button' className='search_button' onClick={handleSearch}>Comienza tu búsqueda</button>
    </div>
  )
}

export default SearchBar