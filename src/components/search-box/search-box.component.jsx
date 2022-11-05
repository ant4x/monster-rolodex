import React from 'react'
import './search-box.styles.css'

function SearchBox(props) {

    const { handleChange, placeholder, className } = props

    return (
        <input className={`search-box ${className}`}
            type='search'
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}

export default SearchBox