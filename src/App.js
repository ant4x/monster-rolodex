import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import { setSearchField, requestMonsters, setFilteredMonsters } from './actions'
import './App.css'

const App = () => {

  const dispatch = useDispatch()
  const { searchField } = useSelector((state) => state.searchMonsters)
  const { monsters, isPending, error } = useSelector((state) => state.requestMonsters)
  const { filteredMonsters } = useSelector((state) => state.filterMonsters)

  useEffect(() => {
    dispatch(requestMonsters())
  }, [dispatch])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField)
    })
    dispatch(setFilteredMonsters(newFilteredMonsters))
  }, [monsters, searchField, dispatch])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase()
    dispatch(setSearchField(searchFieldString))
  }

  return isPending ?
    <h1>Loading...</h1> : !error ?
      (
        <div className='App' >
          <h1 className='app-title'>Monsters Rolodex</h1>
          <SearchBox
            handleChange={onSearchChange}
            placeholder='search monsters'
            className='monsters-search-box'
          />
          <CardList monsters={filteredMonsters} />
        </div >
      ) : <h1>Ooooops. That is not good...</h1>
}

export default App