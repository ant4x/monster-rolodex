import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import { setSearchField } from './actions'
import './App.css'

const App = () => {

  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  const dispatch = useDispatch()
  const { searchField } = useSelector((state) => state)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setMonsters(users))
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField)
    })
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase()
    dispatch(setSearchField(searchFieldString))
  }

  return (
    <div className="App" >
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        handleChange={onSearchChange}
        placeholder='search monsters'
        className='monsters-search-box'
      />
      <CardList monsters={filteredMonsters} />
    </div >
  )
}

export default App