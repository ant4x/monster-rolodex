import React from 'react'
import './card-list.styles.css'
import Card from '../card/card.component'

function CardList(props) {

    const { monsters } = props

    return (
        <div className='card-list'>
            {
                monsters.map(monster => {
                    return (
                        <Card key={monster.name} monster={monster} />
                    )
                })
            }
        </div>
    )
}

export default CardList 