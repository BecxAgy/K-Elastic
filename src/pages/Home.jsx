import React, { useState } from 'react'
import SearchNav from '../components/SearchNav'
import SimpleCardDocument from '../components/SimpleCardDocument'

import { BackgroundCard } from '../components/BackgroundCard'
import ListCardsDocument from '../components/ListCardsDocument'

function Home() {
    const [searchInput, setSearchInput] = useState('')
    return (
        <div className='grid grid-flow-row gap-8'>
            <SearchNav searchInput={searchInput} setSearchInput={setSearchInput}/>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:grid-cols-4 gap-4 lg:gap-8'>
                {searchInput === '' ? <div></div> : <ListCardsDocument />   }
            </div>
        </div>
    )
}

export default Home
