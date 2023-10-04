import React from 'react'
import SearchNav from '../components/SearchNav'
import CardDocument from '../components/CardDocument'

function Home() {
    return (
        <div className='grid grid-flow-row gap-6'>
            <SearchNav />
            <div className='grid grid-cols-4 gap-10 '>
                <CardDocument />
                <CardDocument />
                <CardDocument />
                <CardDocument />
                <CardDocument />
                <CardDocument />
                <CardDocument />
                <CardDocument />
                <CardDocument />
                <CardDocument />
                <CardDocument />
                <CardDocument />
            </div>
        </div>
    )
}

export default Home
